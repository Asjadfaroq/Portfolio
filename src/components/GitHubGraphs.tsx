"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

type ColorScheme = "light" | "dark";

interface GitHubGraphsProps {
  username: string;
  colorScheme?: ColorScheme;
}

const theme = {
  dark: [
    "#020617", // background (empty)
    "#0f172a", // level 1
    "#166534", // level 2
    "#22c55e", // level 3
    "#4ade80", // level 4
  ],
  light: [
    "#ebedf0",
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ],
};

export const GitHubGraphs: React.FC<GitHubGraphsProps> = ({
  username,
  colorScheme = "dark",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getDateRange = () => {
    const end = new Date();
    const start = new Date(2025, 4, 1); // May 1, 2025 (month is 0-indexed)
    return { start, end };
  };

  const transformRange = (data: any[]) => {
    const { start, end } = getDateRange();
    return data.filter((activity) => {
      const d = new Date(activity.date);
      return d >= start && d <= end;
    });
  };

  return (
    <>
      <div className="w-full md:hidden">
        <GitHubCalendar
          username={username}
          errorMessage="Could not fetch GitHub stats"
          hideColorLegend
          theme={theme}
          colorScheme={colorScheme}
          showWeekdayLabels={false}
          blockMargin={5}
          transformData={transformRange}
          until={getDateRange().end}
        />
      </div>

      <div className="hidden w-full md:block">
        <GitHubCalendar
          username={username}
          errorMessage="Could not fetch GitHub stats"
          hideColorLegend={false}
          theme={theme}
          colorScheme={colorScheme}
          showWeekdayLabels={false}
          blockMargin={5}
          transformData={transformRange}
          until={getDateRange().end}
        />
      </div>
    </>
  );
};

