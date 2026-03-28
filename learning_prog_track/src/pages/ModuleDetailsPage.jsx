import "../styles/moduleDetails.css";

export default function ModuleDetailsPage({
  module,
  setModules,
  goBack
}) {
  if (!module) return null;

  const completedLessons = module.lessonList.filter(
    (l) => l.completed
  ).length;

  const progressPercentage =
    module.lessonList.length > 0
      ? Math.round(
          (completedLessons / module.lessonList.length) * 100
        )
      : 0;

  const toggleLesson = (index) => {
    setModules((prevModules) =>
      prevModules.map((m) => {
        if (m.id !== module.id) return m;

        const updatedLessonList = m.lessonList.map((lesson, i) =>
          i === index
            ? { ...lesson, completed: !lesson.completed }
            : lesson
        );

        const completedCount = updatedLessonList.filter(
          (l) => l.completed
        ).length;

        return {
          ...m,
          lessonList: updatedLessonList,
          completed: completedCount
        };
      })
    );
  };

  return (
    <div className="module-details-page">
      
      {/* BACK BUTTON */}
      <button
        className="back-button"
        onClick={() => {
          console.log("Back button clicked");
          goBack();
        }}
      >
        ← Back to Modules
      </button>

      {/* MODULE OVERVIEW */}
      <div className="module-overview">

        <div className="course-tag">
          {module.course}
        </div>

        <h1 className="module-title">
          {module.title}
        </h1>

        <div className="stats-row">
          <div className="stat-box">
            <h2>{module.lessonList.length}</h2>
            <p>Lessons</p>
          </div>

          <div className="stat-box">
            <h2>{module.minutes}</h2>
            <p>Minutes</p>
          </div>

          <div className="stat-box">
            <h2>
              {completedLessons}/{module.lessonList.length}
            </h2>
            <p>Completed</p>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

      </div>

      {/* COURSE CONTENT */}
      <div className="course-content">
        <h3>Course Content</h3>

        {module.lessonList.map((lesson, index) => (
          <div className="lesson-card" key={index}>

            <div className="lesson-left">
              <div className="lesson-number">
                {index + 1}
              </div>

              <div>
                <h4>{lesson.title}</h4>
                <p className="lesson-time">
                  30 minutes
                </p>
              </div>
            </div>

            <input
              type="checkbox"
              checked={lesson.completed}
              onChange={() => toggleLesson(index)}
              className="lesson-checkbox"
            />

          </div>
        ))}

      </div>

    </div>
  );
}