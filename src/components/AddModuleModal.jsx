import React, { useState } from "react";

export default function AddModuleModal({ onClose, onCreate }) {

  const [minutes, setMinutes] = useState("");

  const [course, setCourse] = useState("React Fundamentals");
  const [title, setTitle] = useState("");

  const [lessonTitle, setLessonTitle] = useState("");
  const [lessons, setLessons] = useState([]);


  const addLesson = () => {
    if (!lessonTitle.trim()) return;

    setLessons((prev) => [...prev, lessonTitle]);
    setLessonTitle("");
  };


  const handleCreate = () => {
  if (!title.trim()) return;

  onCreate({
    course,
    title,
    minutes: Number(minutes) || 0,
    lessons: lessons.length || 1,
    lessonList: lessons.length
      ? lessons.map((l) => ({
          title: l,
          completed: false
        }))
      : [
          {
            title: "Lesson 1",
            completed: false
          }
        ]
  });

  onClose();
};

  return (
    <div className="modal-overlay">
      <div className="glow-modal">

       
        <div className="modal-header">
          <h2>Add Module</h2>

          <button className="modal-close-icon" onClick={onClose}>
            ✕
          </button>
        </div>

        
        <div className="modal-field">
          <label>Course Name</label>

          <select
            style={{backgroundColor: "#1a0033", color: "purple"}}
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option> React Fundamentals</option>
            <option>TypeScript Mastery</option>
            <option>Core Subject</option>
            <option>Specialization Course</option>
          </select>
        </div>

        
        <div className="modal-field">
          <label>Module Title</label>

          <input
            placeholder="Enter module title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Total Time (in minutes)</label>
            <input
              type="number"
              placeholder="Enter total minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
        </div>

        
        <div className="modal-row">

          <div className="modal-field flex-grow">
            <label>Lessons</label>

            <input
              placeholder="Lesson title"
              value={lessonTitle}
              onChange={(e) => setLessonTitle(e.target.value)}
            />
          </div>

          
          <div className="modal-number-box">
            {lessons.length || 0}
          </div>

        
          <button className="modal-add-btn" onClick={addLesson}>
            +
          </button>

        </div>

        
        <div className="modal-footer">
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="add-module-btn" onClick={handleCreate}>
            Create
          </button>
        </div>

      </div>
    </div>
  );
}