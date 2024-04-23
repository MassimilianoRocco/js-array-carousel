const selectedImg = document.querySelector(".active");
let nextImg = selectedImg.nextElementSibling;

selectedImg.classList.remove("active");
nextImg.classList.add("active");