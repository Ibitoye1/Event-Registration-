"use strict";

// 1. Event information
const events = [
    {
        id: 1,
        title: "Web Development Workshop",
        date: "December 26, 2026",
        venue: "Online",
        description: "Learn HTML, CSS and JavaScript."
    },
    {
        id: 2,
        title: "Digital Marketing Seminar",
        date: "December 10, 2026",
        venue: "City Conference Hall",
        description: "Discover digital marketing strategies."
    },
    {
        id: 3,
        title: "Tech Innovation Conference",
        date: "December 24, 2026",
        venue: "Grand Hotel",
        description: "Explore new technologies and ideas."
    }
];

// 2. Connect JavaScript to HTML elements
const eventList = document.getElementById("event-list");
const eventSelect = document.getElementById("event-select");
const registrationForm =
    document.getElementById("registration-form");
const formMessage = document.getElementById("form-message");

// 3. Display event cards
function displayEvents() {
    events.forEach(function(event) {
        const card = document.createElement("article");

        card.className = "event-card";

        const title = document.createElement("h3");
        title.textContent = event.title;

        const date = document.createElement("p");
        date.className = "event-date";
        date.textContent = "Date: " + event.date;

        const venue = document.createElement("p");
        venue.textContent = "Venue: " + event.venue;

        const description = document.createElement("p");
        description.textContent = event.description;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn";
        button.textContent = "Register";

        // Select this event in the registration form
        button.addEventListener("click", function() {
            eventSelect.value = String(event.id);

            document.getElementById("full-name").focus();

            document.getElementById("registration-form")
                .scrollIntoView({ behavior: "smooth" });
        });

        card.append(title, date, venue, description, button);
        eventList.appendChild(card);
    });
}

// 4. Fill the event dropdown menu
function populateEventSelect() {
    events.forEach(function(event) {
        const option = document.createElement("option");

        option.value = String(event.id);
        option.textContent = event.title;

        eventSelect.appendChild(option);
    });
}

// 5. Handle form submission
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName =
        document.getElementById("full-name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const selectedEventId = Number(eventSelect.value);

    const selectedEvent = events.find(function(item) {
        return item.id === selectedEventId;
    });

    // Check that the visitor has entered the required details
    if (!fullName || !email || !phone || !selectedEvent) {
        formMessage.textContent =
            "Please complete all fields and select an event.";

        formMessage.style.color = "red";
        return;
    }

    // Show a success message
    formMessage.textContent =
        "Thank you, " + fullName +
        "! You have registered for " + selectedEvent.title + ".";

    formMessage.style.color = "green";

    // Clear the form after submission
    registrationForm.reset();
});

// 6. Start the website
displayEvents();
populateEventSelect();
