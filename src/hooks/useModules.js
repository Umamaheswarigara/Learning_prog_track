import { useMemo } from "react";

export default function useModuleStats(modules) {

  return useMemo(() => {

    const totalModules = modules.length;

    const totalLessons = modules.reduce(
      (acc, m) => acc + m.lessonList.length,
      0
    );

    const completedLessons = modules.reduce(
      (acc, m) => acc + m.completed,
      0
    );

    const totalMinutes = modules.reduce(
      (acc, m) => acc + m.minutes,
      0
    );

    const overallProgress =
      totalLessons > 0
        ? Math.round((completedLessons / totalLessons) * 100)
        : 0;

    return {
      totalModules,
      totalLessons,
      completedLessons,
      totalMinutes,
      overallProgress,
    };

  }, [modules]);
}