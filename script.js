document.addEventListener("DOMContentLoaded", function () {
	const registerBtn = document.getElementById("register");
	const loginBtn = document.getElementById("login");

	// При натисканні на "Реєстрація"
	registerBtn.addEventListener("click", function () {
		alert("❌ Реєстрація закрита. Зверніться до адміністратора.");
	});

	// При натисканні на "Вхід"
	loginBtn.addEventListener("click", function () {
		alert("⚠️ Помилка: Обліковий запис не знайдено.");
	});
});
// Автоматично приховуємо кнопки після певного часу
setTimeout(() => {
	document.querySelector(".buttons").classList.add("hidden");
}, 6000); // Через 6 секунд після завантаження
