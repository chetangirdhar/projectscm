function calculateCountdown() {
    // Get the event names
    var event1Name = document.getElementById("event1-name").value;
    var event2Name = document.getElementById("event2-name").value;

    // Provide the dates for the events in JavaScript
    var eventDates = {
        "Diwali": new Date("2023-11-12T00:00:00"),
        "Christmas": new Date("2023-12-25T00:00:00"),
        "NewYear": new Date("2023-12-31T00:00:00"),
        "Halloween": new Date("2024-11-15T00:00:00"),
        "Navratri": new Date("2024-10-15T00:00:00"),
        "Wedding": new Date("2023-12-13T00:00:00"),
        "Freshers": new Date("2023-11-25T00:00:00"),
        "camp": new Date("2023-12-18T00:00:00"),

    };
    var event1Date = eventDates[event1Name];
    var event2Date = eventDates[event2Name];

    // Check if either date is not selected
    if (!event1Date || !event2Date) {
        alert("Please select valid event dates");
        return;
    }

    // Calculate the time difference in milliseconds
    var timeDiff = event2Date - event1Date;

    // // Check if the end date is before the start date
    if (timeDiff < 0) {
        alert("End date should be after the start date");
        return;
    }

    // Display the result
    document.getElementById("days").innerText = event2Name + " - " + event1Name + " Days: " + Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = "Hours: " + Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = "Minutes: " + Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = "Seconds: " + Math.floor((timeDiff % (1000 * 60)) / 1000);

    
    // Start the countdown timer
    startCountdown(timeDiff);
}

function startCountdown(initialTimeDiff) {
    var timeDiff = initialTimeDiff; // Store the initial time difference

    var countdownInterval = setInterval(function () {
        // Check if countdown is complete
        if (timeDiff <= 0) {
            clearInterval(countdownInterval); // Stop the countdown
            return;
        }

        // Calculate days, hours, minutes, and seconds based on the remaining time difference
        var remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var remainingHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var remainingMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = "Days: " + remainingDays;
        document.getElementById("hours").innerText = "Hours: " + remainingHours;
        document.getElementById("minutes").innerText = "Minutes: " + remainingMinutes;
        document.getElementById("seconds").innerText = "Seconds: " + remainingSeconds;

        // Update time difference for the next iteration
        timeDiff -= 1000;

    }, 1000);
}
