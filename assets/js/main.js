'use strict'

let box = document.querySelector('.box');
let startBtn = document.querySelector('.startBtn');
let stopBtn = document.querySelector('.stopBtn');

let intervalId;

function changeBoxColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
}

startBtn.addEventListener('click', ()=>{
    intervalId = setInterval(changeBoxColor, 500);
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(intervalId);
})