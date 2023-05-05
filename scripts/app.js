let events = [];
let filteredEvents = [];

window.addEventListener("DOMContentLoaded", async () => {
    console.log("App is ready");
    const response = await fetch("data.json");
    events = await response.json();
    filteredEvents = events;
    loadEvents();
})

window.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementsByName("filter-dropdown")[0];
    dropdown.addEventListener("change", () => {
        if (dropdown.value == "All") {
            filteredEvents = events;
        } else {
            filteredEvents = events.filter(event=>event.type==dropdown.value)
        }
        loadEvents();
    });
})

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#page-cart form");
    form.addEventListener("submit", event => {
        event.preventDefault();
        if (form.checkValidity()) {
            alert("Your order was submitted");
            for (let formControl of form.elements) {
                formControl.value = "";
            }
        } else {
            form.reportValidity();
        }
    });
});

function loadEvents() {
    // Parse the events collection and render HTML
    document.querySelector("#page-home tbody").innerHTML = "";
    filteredEvents.forEach( event => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="event-image">
                <img src="img/thumb/${event.image}.jpg" alt="Event Thumbnail">
            </td>
            <td class="event-date">${event.date}</td>
            <td class="event-name">${event.title}</td>
            <td class="event-artist">${event.artist}</td>
            <td class="event-price">$ ${event.price}</td>
        `;
        tr.style.borderTopColor = event.color;
        tr.style.borderTopStyle = "solid";
        tr.style.borderTopWidth = "5px";
        tr.addEventListener("click", () => {
            goTo("/details", event);
        })
        tr.dataset.color = event.color;

        document.querySelector("#page-home tbody").appendChild(tr);
        document.dispatchEvent(new Event("eventsload"));
    });
}

function renderEventDetails(event) {
    console.log(`We will render ${event.title}`);
    const page = document.getElementById("page-details");
    page.querySelector(".event-type").textContent = event.type;
    page.querySelector(".event-title").textContent = event.title;
    page.querySelector(".event-title").style.color = event.color;
    page.querySelector(".event-date").textContent = event.date;
    page.querySelector(".event-artist").textContent = event.artist;
    page.querySelector(".event-description").textContent = event.description;
    page.querySelector(".event-price").textContent = `$ ${event.price}`;
    page.querySelector(".event-image").src = `img/thumb/${event.image}.jpg`;
    setThemeColor(event.color);

    const button = document.createElement("button");
    button.textContent = "Add to Cart";    
    button.onclick = () => {
        const quantity = parseInt(document.getElementById("quantity-dropdown").value);
        const item = {
            event,
            quantity
        }
        const cartAddEvent = new Event("cartadd");
        cartAddEvent.item = item;
        document.dispatchEvent(cartAddEvent);
    }
    page.querySelector(".event-purchase-button").innerHTML = "";
    page.querySelector(".event-purchase-button").appendChild(button);
}

function setThemeColor(color) {
    document.querySelector("header").style.backgroundColor = color;
    document.querySelector("meta[name=theme-color]").content = color;
}

document.addEventListener("routerender", () => {
    setThemeColor("black");
})





