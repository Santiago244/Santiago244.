
let userName = document.getElementById('name');
let email = document.getElementById('email');
let label = document.getElementById('label');
let label2 = document.getElementById('label2');

const manageEventWithToggle = (classToAddAndDelete, eventListener, elementListener, stateClass, elementChanger) =>{
    if(stateClass){
        elementListener.addEventListener(eventListener ,()=>{
            elementChanger.classList.add(classToAddAndDelete);
        })
    }else{
        elementListener.addEventListener(eventListener ,()=>{
            if(elementListener.value.trim() === ''){
                elementChanger.classList.remove(classToAddAndDelete);
            }
        })
    }
}
manageEventWithToggle('label', 'focus', email, true, label2);
manageEventWithToggle('label', 'focusout', email, false, label2);
manageEventWithToggle('label', 'focus', userName, true, label);
manageEventWithToggle('label', 'focusout', userName, false, label);

// Measure the words of a program
// Get the form
let form = document.querySelector('.contact__form');
// Get the textarea
let textarea = document.querySelector('.contact__form__cont2__txtarea');
// Get the wordspan
let wordSpan = document.querySelector('.words');
let number = document.querySelector('.numberWords');

textarea.addEventListener('input', ()=>{
    let wordsNumber = textarea.value.trim().split(' ').length;
    if(textarea.value === '' || textarea.value.trim() === ''){
        number.innerHTML = '0';
        console.log(0)
    }else{
        number.innerHTML = `${wordsNumber}`;
        console.log(wordSpan.innerText, wordsNumber)
    }

})

form.addEventListener('submit', (e)=>{
    let wordCount = parseInt(number.textContent);
    if(wordCount < 5){
        alert('Write at least 5 words');
        console.log(wordCount)
        e.preventDefault()
    }else if(textarea.value.match('/^[a-zA-Z0-9]*$/')){
        alert('You can just write alphabetical and numerical expressions, try again 🙃');
        console.log(textarea.value, textarea.value.trim().match('/^[a-zA-Z0-9]*$/\s'))
        e.preventDefault()
    }
    else if(wordCount > 25){
        alert('You can just write 25 words');
        console.log(wordCount)
        e.preventDefault()
    }
})