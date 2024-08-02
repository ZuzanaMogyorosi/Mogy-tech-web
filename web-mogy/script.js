// NAVIGACE

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
	if (hamburgerIcon.classList.contains("fa-bars")) {
		hamburgerIcon.classList.add("fa-xmark");
		hamburgerIcon.classList.remove("fa-bars");
		menuList.style.display = "block";
	} else {
		hamburgerIcon.classList.add("fa-bars");
		hamburgerIcon.classList.remove("fa-xmark");
		menuList.style.display = "none";
	}
});

// FORM-SECTION

// Tlačítko zpět nahoru

const toTop = document.querySelector(".top-page");
const topCircle = document.querySelector(".top-circle");

window.addEventListener("scroll", () => {
	if (window.scrollY >= 100) {
		toTop.classList.add("show");
		topCircle.classList.add("show");
		toTop.classList.remove("hide");
		topCircle.classList.remove("hide");
	} else {
		toTop.classList.remove("show");
		topCircle.classList.remove("show");
		toTop.classList.add("hide");
		topCircle.classList.add("hide");
	}
});
