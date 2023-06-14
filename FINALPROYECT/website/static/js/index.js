2
const d = document;
let circle1 = d.getElementById('circle1');
let circle2 = d.getElementById('circle2');
let circle3 = d.getElementById('circle3');
let arts__card1 = d.getElementById('arts__card1')
let arts__card2 = d.getElementById('arts__card2')
let arts__card3 = d.getElementById('arts__card3')
let navBarBtn = d.querySelector('.navar__btn');
d.addEventListener("DOMContentLoaded", function(){

    window.addEventListener('scroll', function(){


        let posicion = d.documentElement.scrollTop;

        if(posicion > 300){
            // for(let i = 1; i <= 4; i++)
            // {
                d.getElementById("card1").style.animation = `aspectsleft  2s ease-in-out`;
                d.getElementById("card2").style.animation = `aspectsright 3s ease-in-out`;
                d.getElementById("card3").style.animation = `aspectsleft  4s ease-in-out`;
                d.getElementById("card4").style.animation = `aspectsright  4s ease-in-out`;
            // }
        }
        if(posicion > 1470){
            d.getElementById("skillsanimation").style.animation = "aspectsleft 2s ease-in-out";
            // d.getElementById("imganimation").style.animation = "aspectsleft 4s ease-in-out";
            // d.getElementsByClassName("skillsanimation").style.animation = "aspectsright 4s ease-in-out";
        }
        navBarBtn.addEventListener('mouseover', ()=>
        {
            navBarBtn.classList.toggle('navar__btn-tranform')
        })        
})

document.querySelector(".alerta").addEventListener("click", function() {
    // Arrange the below code in an animation and then put the (from{}) to do a well design, with the animate property
    document.querySelector(".none").classList.add("show")
    document.querySelector(".none").style.posicion = "relative"


})
document.querySelector(".headBack").addEventListener("click", () => {
    document.querySelector(".none").classList.remove("show");
})

d.getElementById("rotation").addEventListener("click", function(){
    d.getElementById('figure').classList.toggle("figures")
})


// ARTICLES ANIMATIONS OR DOM MANAGEMENT
let counter = 1;
circle1.addEventListener('click', ()=>{
    arts__card1.classList.remove('card');
    arts__card3.classList.remove('card');
    arts__card1.style.opacity = '0';
    arts__card3.style.opacity = '0';
    arts__card2.style.opacity = '1';
    arts__card2.classList.add('card');
    circle2.style.zIndex = `${counter}`;
    arts__card2.style.zIndex = `${counter}`;
    counter+=2;
})
circle2.addEventListener('click', ()=>{
    
    arts__card1.classList.remove('card');
    arts__card2.classList.remove('card');
    arts__card1.style.opacity = '0';
    arts__card2.style.opacity = '0';
    arts__card3.style.opacity = '1';
    arts__card3.classList.add('card');
    circle3.style.zIndex = `${counter}`;
    arts__card3.style.zIndex = `${counter}`;
    counter+=2;
})
circle3.addEventListener('click', ()=>{
    arts__card3.classList.remove('card');
    arts__card2.classList.remove('card');
    arts__card3.style.opacity = '0';
    arts__card2.style.opacity = '0';
    arts__card1.style.opacity = '1';
    arts__card1.classList.add('card');
    circle1.style.zIndex = `${counter}`;
    arts__card1.style.zIndex = `${counter}`;
    counter+=2;
    
})




})

