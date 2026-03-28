import "../styles/DashboardPageStyles.css";
import { BookOpen, Award, Clock } from "lucide-react";
import useModuleStats from "../hooks/useModules";

export default function Dashboard({ user, modules }) {

  
  const {
    totalModules,
    completedLessons,
    totalMinutes,
    overallProgress,
  } = useModuleStats(modules);

  return (
    <div className="dashboard">

      
      <div className="left-panel">
        <h2>Learning Progress System</h2>

        <div className="profile-section">
          <div className="profile-avatar">🎯</div>
          <div>
            <h3>{user?.name || user?.email || "User"}</h3>
            <p>{user?.email || "No email"}</p>
          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <BookOpen size={20} />
            <h1>{totalModules}</h1>
            <p>Total Modules</p>
          </div>

          <div className="stat-card">
            <Award size={20} />
            <h1>{completedLessons}</h1>
            <p>Lessons Completed</p>
          </div>

          <div className="stat-card">
            <Clock size={20} />
            <h1>{totalMinutes}</h1>
            <p>Total Minutes</p>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-top">
            <span>Overall Progress</span>
            <span>{overallProgress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
  <h2 className="chart-title">Module Progress</h2>

  <div className="chart-container">
    <div className="chart-grid">
      {modules.map((module) => {
        const moduleProgress =
          module.lessonList.length > 0
            ? (module.completed / module.lessonList.length) * 100
            : 0;

        return (
          <div key={module.id} className="bar-wrapper">
            <div
              className="bar"
              style={{ height: `${moduleProgress}%` }}
            ></div>
            <span className="bar-label">{module.title}</span>
          </div>
        );
      })}
    </div>
  </div>
</div>
    </div>
  );
}