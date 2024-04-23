//NEXT BUTTON
document.getElementById("nextB").addEventListener("click", function(){

    const selectedImg = document.querySelector(".active");
    const selectedEffect = document.querySelector(".selected_effect");
    
    let nextImg = selectedImg.nextElementSibling;
    let nextEffect = selectedEffect.nextElementSibling;

    selectedImg.classList.remove("active");
    selectedEffect.classList.remove("selected_effect");

    if(nextImg == null){
        nextImg= document.querySelector(".slide:first-child"); 
        nextImg.classList.add("active");
    }
    else{
    nextImg.classList.add("active");
    }

    if(nextEffect == null){
        nextEffect= document.querySelector(".set-img-car:first-child"); 
        nextEffect.classList.add("selected_effect");
    }
    else{
    nextEffect.classList.add("selected_effect");
    }

})


//PREVIOUS BUTTON
document.getElementById("prevB").addEventListener("click", function(){
    
    const selectedImg = document.querySelector(".active");
    const selectedEffect = document.querySelector(".selected_effect");

    let nextImg = selectedImg.previousElementSibling;
    let nextEffect = selectedEffect.previousElementSibling;
    
    selectedImg.classList.remove("active");
    selectedEffect.classList.remove("selected_effect");

    if(nextImg == null){
        nextImg= document.querySelector(".slide:last-of-type"); 
        nextImg.classList.add("active");
    }
    else{
    nextImg.classList.add("active");
    }

    if(nextEffect == null){
        nextEffect= document.querySelector(".set-img-car:last-child"); 
        nextEffect.classList.add("selected_effect");
    }
    else{
    nextEffect.classList.add("selected_effect");
    }
});


