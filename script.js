let generateBtn = document.querySelector("#btn");
let alphaNum = document.querySelector("#alphaNum");
let specialChar = document.querySelector("#specialChar");
let inpBox = document.querySelector('#inpBox');
let lengthBox = document.querySelector("#lengthBox");
let copyIcon = document.querySelector("#copyIcon");
let passwordLength = 0;
let simplePassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let alphaNumPassword = "AB11CDE1FG1HIJ22KLM2NO2PQ3R33ST3UVW44XY5Za55b6cde77fg89hi9jklm00nop0qrstuvwxyz";
let specialCharPassword = "ABC!DE@#HI$JK$LM$NOP%QR%ST%UV^W^XYZa&bc&de7fg*hij8klm8no(pq)rs__tu--vwxyz";
let specialCharAlphaNumPassword = "AB1CD2EF4GHI#52JK4LM@6NO%%7PQ16@3#R4$75%S89T0U0VWXYZab!cd@ef#gh$ij%k^lm&n*o(p)q()stuvwxyz";

function generatePassword(myStr){
    let password = "";
    for(let i = 0; i < passwordLength; i++){
        password += myStr[Math.floor(Math.random()*myStr.length)];
    }
    return password;
}

function setPasawordLength(){
    if(lengthBox.value == ""){
        passwordLength = 8;
    }else{
        passwordLength = lengthBox.value;
    }
}

// function showPassword(password){
//      inpBox.value = password;
// }

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    setPasawordLength();
    if(alphaNum.checked && specialChar.checked){
        inpBox.value = generatePassword(specialCharAlphaNumPassword);
    }
    else if(alphaNum.checked && !specialChar.checked){
        inpBox.value = generatePassword(alphaNumPassword);
    }
    else if(!alphaNum.checked && specialChar.checked){
        inpBox.value = generatePassword(specialCharPassword);
    }
    else{
        inpBox.value = generatePassword(simplePassword);
    }   
})

copyIcon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(inpBox.value);
    alert("Password copied!!");
})
