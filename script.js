document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById("modal");
	const modalTitle = document.getElementById("modal-title");
	const nameFields = document.getElementById("name-fields");
	const submitBtn = document.getElementById("submit-btn");

	const registerBtn = document.getElementById("register");
	const loginBtn = document.getElementById("login");
	const closeModal = document.querySelector(".modal__close");

	modal.style.display = "none";

	// Відкриття модального вікна
	function openModal(type) {
		modal.style.display = "flex";

		if (type === "register") {
			modalTitle.textContent = "Sign Up";
			nameFields.style.display = "block";
			submitBtn.textContent = "Registration";
		} else {
			modalTitle.textContent = "Sign In";
			nameFields.style.display = "none";
			submitBtn.textContent = "Login";
		}
	}

	registerBtn.addEventListener("click", () => openModal("register"));
	loginBtn.addEventListener("click", () => openModal("login"));

	// Закриття модального вікна
	closeModal.addEventListener("click", () => {
		modal.style.display = "none";
	});

	window.addEventListener("click", (e) => {
		if (e.target === modal) {
			modal.style.display = "none";
		}
	});

	// Форма (фейкова обробка)
	document.getElementById("auth-form").addEventListener("submit", function (e) {
		e.preventDefault();
		if (submitBtn.textContent === "Registration") {
			alert("Registration is not possible. Please contact the administrator.");
		} else {
			alert("Login error. Account not found.");
		}
	});
});
