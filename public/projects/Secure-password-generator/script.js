console.log('done');

const numbers = document.getElementById('numbers');
const alphabats = document.getElementById('alphabats');
const capital = document.getElementById('capital');
const symbols = document.getElementById('symbols');
const inputBox = document.getElementById('inputBox');
const numberOfPassword = document.getElementById('numberOfPassword');
const generatedPasswordBtn = document.getElementById('generatedPasswordBtn');
const copyBtn = document.getElementById('copyBtn');
const lengthOfPasswordTxt = document.getElementById('lengthOfPasswordTxt');
const randomize = document.getElementById('randomize');

const numbersStr = '1234567890';
const capitalStr = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const alphabatsStr = 'qwertyuiopasdfghjklzxcvbnm';
const symbolsStr = `~!@#$%^&*()_+-=[]{}|;':"<>?,./`;


generatedPasswordBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyGeneratedPassword);
numberOfPassword.addEventListener('input', () => {
    lengthOfPasswordTxt.innerText = `${numberOfPassword.value}`;
});

randomize.addEventListener('click', () => {
    let psdLength = inputBox.value.length;
    let password=inputBox.value;
    let passwordCharArr=[];
    let randomString;
    for(let i=0;i<psdLength;i++){
        passwordCharArr.push(password[i]);
    }
    passwordCharArr.sort(() => .5 - Math.random());
    passwordCharArr=passwordCharArr.join('');
    inputBox.value=passwordCharArr;
})

var stringsArr = [];


let securePassword = '';

function selected() {
    let psdLength = numberOfPassword.value;
    for (let index = 0; index < psdLength; index++) {
        let i = 0;
        do {
            securePassword += stringsArr[i].charAt(parseInt(Math.random() * stringsArr[i].length));
            i++;
        } while (i < stringsArr.length);
    }
    securePassword = securePassword.substring(0, psdLength);
    inputBox.value = securePassword;
}


function generatePassword() {
    stringsArr = [];
    securePassword = '';
    if (numbers.checked == true) {
        stringsArr.push(numbersStr);
    }
    if (alphabats.checked == true) {
        stringsArr.push(alphabatsStr);
    }
    if (capital.checked == true) {
        stringsArr.push(capitalStr);
    }
    if (symbols.checked == true) {
        stringsArr.push(symbolsStr);
    }
    if(numbers.checked == false && alphabats.checked == false && capital.checked == false && symbols.checked == false){
        generateSecurePassword();
    }
    else{
        selected();
    }
}

function copyGeneratedPassword() {
    let copyText = document.getElementById("inputBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showCopyMsg();
}

function showCopyMsg() {
    copyBtn.innerText = 'copied';
    copyBtn.style.transform = 'translateX(170%)';
    setTimeout(() => {
        copyBtn.innerText = 'copy';
        copyBtn.style.transform = 'translateX(240%)';
    }, 3000);
}

/*
there are some changes...
("a","@")
("O","0")
("s",$)
("i",!)
("I",|)
*/

function generateSecurePassword(){
    let inputValue=inputBox.value;
    if(inputValue.includes('and')){
        inputValue=inputValue.replace('and','&');
    }
    if(inputValue.includes('a')||inputValue.includes('A')){
        inputValue=inputValue.replace('a','@');
    }
    if(inputValue.includes('O')||inputValue.includes('O')){
        inputValue=inputValue.replace('O','0');
    }
    if(inputValue.includes('s')||inputValue.includes('S')){
        inputValue=inputValue.replace('s','$');
    }
    if(inputValue.includes('i')){
        inputValue=inputValue.replace('i','!');
    }
    if(inputValue.includes('I')){
        inputValue=inputValue.replace('I','|');
    }
    let anyNumber = parseInt((Math.random()) * inputValue.length);
    inputValue[anyNumber] = inputValue[anyNumber].toUpperCase();
    inputBox.value=inputValue;
}
