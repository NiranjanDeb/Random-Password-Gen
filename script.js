
const passwordBox = document.getElementById('password');
const length = 12;
let button = document.getElementById('btn');


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz "; 
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{><?/][-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)];

    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    let copy = document.getElementById('copy');
    copy.style.width = "20px";
    copy.style.height = "24px";
    setTimeout(() => {
        copy.style.width = "24px";
        copy.style.height = "28px"; 
    }, 1200)
};
let copy = document.getElementById('copy');

button.addEventListener('click', createPassword);
copy.addEventListener('click', copyPassword
 );