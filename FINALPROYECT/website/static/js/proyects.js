const double = document.querySelector('.main__section__projects__container__double');
const card = document.querySelectorAll('.main__section__projects__container__double__card');
const buttonRight = document.querySelector('.right');
const buttonLeft = document.querySelector('.left');
const buttonUp = document.querySelectorAll('.up');
const buttonDown = document.querySelectorAll('.down');
const calculatorDescription = document.querySelectorAll('#calculatorDescription');
const calculatorTitle = document.querySelectorAll('#calculatorTitle');

let counter = 1;
buttonRight.addEventListener('click', ()=>{
    if(counter > 3){
        double.style.transform = `translateX(0%)`  
        counter = 1;  
    }
    else{
        double.style.transform = `translateX(${counter * -25}%)`
        counter++;
        console.log(counter)
    }
})
buttonLeft.addEventListener('click', ()=>{
    counter = 1;
    double.style.transform = `translateX(0%)`

}) 

buttonUp.forEach(element => 
    element.addEventListener('click', ()=>{
    buttonDown.forEach(element => element.classList.remove('none'));
    buttonUp.forEach(element => element.classList.add('none'));
    calculatorTitle.forEach(element => element.classList.remove('none'));
    calculatorDescription.forEach(element => element.classList.remove('none'));
}))
buttonDown.forEach(element1 => 
    element1.addEventListener('click', ()=>{
    buttonUp.forEach(element => element.classList.remove('none'));
    buttonDown.forEach(element => element.classList.add('none'));
    calculatorTitle.forEach(element => element.classList.add('none'));
    calculatorDescription.forEach(element => element.classList.add('none'));
}))



