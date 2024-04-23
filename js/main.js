//NEXT BUTTON
document.getElementById("nextB").addEventListener("click", function(){
    
    const selectedImg = document.querySelector(".active");
    let nextImg = selectedImg.nextElementSibling;
    
    selectedImg.classList.remove("active");

    if(!nextImg.classList.contains("set-img")){
        nextImg= document.querySelector(".slide:first-child"); 
        nextImg.classList.add("active");
    }
    else{
    nextImg.classList.add("active");
    }
});

//PREVIOUS BUTTON
document.getElementById("prevB").addEventListener("click", function(){
    
    const selectedImg = document.querySelector(".active");
    let nextImg = selectedImg.previousElementSibling;
    
    selectedImg.classList.remove("active");

    if(!nextImg.classList.contains("set-img")){
        nextImg= document.querySelector(".slide:last-child"); 
        nextImg.classList.add("active");
    }
    else{
    nextImg.classList.add("active");
    }
});