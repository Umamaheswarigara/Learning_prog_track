import "../styles/modulesPageStyles.css";

export default function ModuleCard({ module, onClick }) {

  // 🔥 ADD THIS HERE (right after function starts)

  const completedLessons = module.lessonList.filter(
    (l) => l.completed
  ).length;

  const percent =
    module.lessonList.length > 0
      ? Math.round(
          (completedLessons / module.lessonList.length) * 100
        )
      : 0;

  return (
    <div className="module-card" onClick={onClick}>
      <div className="module-top">
        <h2>{module.title}</h2>
        <span className="module-badge">{module.course}</span>
      </div>

      <div className="module-info">
        <span>
          {module.completed} / {module.lessons} lessons
        </span>
        <span>•</span>
        <span>{module.minutes} min</span>
        <span>•</span>
        <span
          className={
            percent === 100
              ? "complete-green"
              : percent > 0
              ? "complete-purple"
              : "complete-gray"
          }
        >
          {percent}% complete
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}