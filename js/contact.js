const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
    }

    const phonePattern = /^\d+$/;

    if (!phonePattern.test(phone)) {
    formMessage.textContent = "Phone number must contain digits only.";
    formMessage.style.color = "red";
    return;
    }

    formMessage.textContent = "Your form has passed validation successfully!";
    formMessage.style.color = "green";

});