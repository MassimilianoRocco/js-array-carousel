document.getElementById("nextB").addEventListener("click", function(){
    
    const selectedImg = document.querySelector(".active");
    let nextImg = selectedImg.nextElementSibling;
    
    selectedImg.classList.remove("active");
    nextImg.classList.add("active");
});

document.getElementById("prevB").addEventListener("click", function(){
    
    const selectedImg = document.querySelector(".active");
    let nextImg = selectedImg.previousElementSibling;
    
    selectedImg.classList.remove("active");
    nextImg.classList.add("active");
});