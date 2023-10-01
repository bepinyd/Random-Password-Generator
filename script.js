const PassBox=document.getElementById('password')
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const symbols="!@#$%^&*()_+-={}[]|\:;\"'<>,. /~`"
const number="0123456789"
const lengths=12
const allChar=upperCase+lowerCase+symbols+number

function Password(){
    let password=""
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=symbols[Math.floor(Math.random()*symbols.length)]
    password+=number[Math.floor(Math.random()*number.length)]
    while(lengths>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    PassBox.value=password;
}

function copy(){
    PassBox.select();
    document.execCommand('copy')
}