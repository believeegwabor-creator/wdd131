// -----------------------------
// Last Modified Footer
// -----------------------------

const lastModifiedElement = document.querySelector("#lastModified");

if (lastModifiedElement) {
lastModifiedElement.textContent =
`Last Modified: ${document.lastModified}`;
}

// -----------------------------
// Services Data (Array of Objects)
// -----------------------------

const services = [
{
name: "Wash & Fold",
description: "Professional washing, drying, and folding service.",
price: "₦500/kg"
},
{
name: "Dry Cleaning",
description: "Premium cleaning for delicate and special garments.",
price: "₦1,500/item"
},
{
name: "Ironing",
description: "Professional pressing and wrinkle removal.",
price: "₦300/item"
},
{
name: "Pickup & Delivery",
description: "Convenient collection and delivery service.",
price: "₦1,000"
}
];

// -----------------------------
// Display Services
// -----------------------------

function displayServices() {

const container =
    document.querySelector("#servicesContainer");

if (!container) return;

services.forEach(service => {

    container.innerHTML += `
        <article class="card">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p><strong>${service.price}</strong></p>
        </article>
    `;
});

}

displayServices();

// -----------------------------
// Booking Form
// -----------------------------

const bookingForm =
document.querySelector("#bookingForm");

if (bookingForm) {

bookingForm.addEventListener(
    "submit",
    saveBooking
);

}

// -----------------------------
// Save Booking Function
// -----------------------------

function saveBooking(event) {

event.preventDefault();

const customerName =
    document.querySelector("#customerName").value;

const phone =
    document.querySelector("#phone").value;

const address =
    document.querySelector("#address").value;

const service =
    document.querySelector("#service").value;

const weight =
    Number(
        document.querySelector("#weight").value
    );

let estimatedCost;

// Conditional Logic

if (weight > 10) {

    estimatedCost = weight * 400;

} else {

    estimatedCost = weight * 500;
}

// Object

const booking = {
    customerName,
    phone,
    address,
    service,
    weight,
    estimatedCost
};

// Local Storage

const bookings =
    JSON.parse(
        localStorage.getItem("bookings")
    ) || [];

bookings.push(booking);

localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
);

const message =
    document.querySelector("#bookingMessage");

message.innerHTML = `
    <p>
        Thank you, ${customerName}!
        Your booking has been saved.
        Estimated Cost: ₦${estimatedCost}
    </p>
`;

bookingForm.reset();

loadBookings();
```

}

// -----------------------------
// Load Bookings
// -----------------------------

function loadBookings() {

```
const bookingList =
    document.querySelector("#bookingList");

if (!bookingList) return;

const bookings =
    JSON.parse(
        localStorage.getItem("bookings")
    ) || [];

bookingList.innerHTML = "";

bookings.forEach(booking => {

    bookingList.innerHTML += `
        <div class="booking-card">
            <div>
                <h3>${booking.customerName}</h3>
                <p><strong>Phone:</strong> ${booking.phone}</p>
                <p><strong>Service:</strong> ${booking.service}</p>
                <p><strong>Weight:</strong> ${booking.weight} kg</p>
                <p><strong>Estimated Cost:</strong> ₦${booking.estimatedCost}</p>
            </div>
        </div>
    `;
});

}

loadBookings();
