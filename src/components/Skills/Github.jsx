import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
    return (
        <GitHubCalendar
            username="Mridulkatara"
            transformData={selectLastHalfYear}
            labels={{
                totalCount: '{{count}} commits in last 6 months',
            }}
            blockSize={19}
            blockMargin={5}
            fontSize={20}
            hideTotalCount={true}
            theme={{
                "light": [
                  "rgb(231, 225, 225)", // Use the background color
                  "#854CE6" // Text color
                ],
                "dark": [
                  "hsl(0, 0%, 10%)",
                  "#8667D9"
                ]
              }}
              style={{
                color: "#854CE6", // Text color
                backgroundColor: "rgb(231, 225, 225)", // Background color
                margin: "auto",
                padding: "15px",
              }}
              
        />
    );
}

export default Github;
