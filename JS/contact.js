const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
	btnText.innerHTML = "Thanks";
	btn.classList.add("active");
	console.log("Button Clicked");
};

const contactForm = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const btn = document.getElementById("btn");

contactForm.addEventListener("submit", (event) => {
	if (!contactForm.checkValidity()) {
		event.preventDefault();
		// Display validation messages
		// You can add your own logic here to show validation messages
	} else {
		// Form is valid, proceed with form submission
	}
});

// Optionally, you can add more custom validation logic
// For example, checking if the email format is valid
emailInput.addEventListener("input", () => {
	if (!emailInput.validity.valid) {
		emailInput.setCustomValidity("Please enter a valid email address.");
	} else {
		emailInput.setCustomValidity("");
	}
});
