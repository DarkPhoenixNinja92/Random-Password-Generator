const textArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
let lengthGen = Math.floor(Math.random(9) * 25 + 1);
let passVal = "";
console.log(lengthGen);
let resetPass = () => {
    document.getElementById("password").innerHTML = "";
}

let passGen = () => {
    passVal = "";
    for (let i = 0; i <= 9; i++) {
        passVal += textArr[Math.floor(Math.random() * textArr.length)];
    }
    document.getElementById("password").innerHTML = passVal;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("generate-password").addEventListener('click', passGen);
    document.getElementById("reset-password").addEventListener('click', resetPass);
})