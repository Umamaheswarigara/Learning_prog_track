import React, { useState } from "react";
import ModuleCard from "../components/ModuleCard";
import AddModuleModal from "../components/AddModuleModal";

import "../styles/ModulesPageStyles.css";

export default function Modules({
  modules,
  setModules,
  onSelectModule
}) {
  const [showModal, setShowModal] = useState(false);

  const handleAddModule = (newModule) => {
    setModules((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newModule.title,
        course: newModule.course,
        lessons: newModule.lessons,
        lessonList: newModule.lessonList,
        completed: 0,
        minutes: newModule.minutes,
      }
    ]);
  };

  return (
    <div className="modules-page">
      <div className="modules-header">
        <div>
          <h1>Course Modules</h1>
          <p>Organize your learning into modules and track lessons!!</p>
        </div>

        <button
          className="add-module-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Module
        </button>
      </div>

      <div className="modules-list">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onClick={() => onSelectModule(module.id)}
          />
        ))}
      </div>

      {showModal && (
        <AddModuleModal
          onClose={() => setShowModal(false)}
          onCreate={handleAddModule}
        />
      )}
    </div>
  );
}