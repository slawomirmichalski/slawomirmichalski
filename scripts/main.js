
var myHeading = document.querySelector('h1'); //używając funkcji zwanej querySelector() by chwycić referencje do nagłówka i przechowywać ją w zmiennej o nazwie myHeading. 
myHeading.textContent = 'Hello World hahaha!';

function multiply (num1,num2) {
    var result = num1*num2;
    return result;
}

/**
document.querySelector('html').onclick = function() {
    alert('Stop poking me');
} **/

//Zmiana obrazka po kliknięciu
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc.includes('firefox')) { //or (mySrc === 'images/firefox-icon.png')
        myImage.setAttribute('src','images/pies.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//Pobieranie nazwy usera i wyświetlanie jej na stronie + zapisywanie w ciasteczkach
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.textContent ='Mozilla is cool, '+ myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

