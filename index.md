<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
  <style>
      *{
    margin: 0;
    padding: 0;
}
body{
    background-color: rgb(182, 219, 219);
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    flex-direction: column;
}

.container form{
    padding: 1rem;
    background-color: rgb(210, 30, 75);
    border-radius: 1rem;
    color: rgb(13, 238, 219);
}

.displayBlock .show{
    display: flex;
}
.displayBlock .show input{
    padding: 0 0.3rem;
    font-size: medium;
    border: none;
    background-color: rgb(129, 125, 125);
    color: #fff;
    font-weight: bold;
    border-radius: 0.5rem;
}
#copyIcon img{
    max-width: 2rem;
    margin: 0 0.4rem;
    cursor: pointer;
}

.displayBlock{
   padding: 1rem 1rem;
   font-size: 1.4rem;
}
.displayBlock label{
    cursor: pointer;
}
.displayBlock input[type="number"]{
    padding: 0.4rem;
    border: none;
    border-radius: 0.4rem;
    font-size: medium;
}
.displayBlock input[type="submit"]{
    padding: 0.8rem 1.3rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    background-color: cyan;
    transition: background-color 0.2s ease-in;
    font-size: medium;
    font-weight: bold;
    margin-top: 1rem;
    margin-left: 2.3rem;
}
.displayBlock input[type="submit"]:hover{
    background-color:  rgb(50, 216, 35);
}
.heading {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: fantasy;
    color: rgb(218, 42, 101);
}
  </style>
</head>
<body>
   
    <div class="container">
        <div class="heading">
            <h1>Password Generator</h1>
        </div>
        <form action="">
            <div class="displayBlock">
                <div class="show">
                    <input type="text" name="" id="inpBox">
                    <span id="copyIcon"><img src="copy.png" alt="copy"></span>
                </div>
            </div>
            <div class="displayBlock">
                <label for="lengthBox" style="display: block;">Length</label>
                <input type="number" name="" id="lengthBox">
            </div>
            <div class="displayBlock">
                <input type="checkbox" name="" id="alphaNum">   
                <label for="alphaNum">Alphanumeric</label>
            </div>
            <div class="displayBlock">
                <input type="checkbox" name="" id="specialChar">
                <label for="specialChar">Includes special character</label>
            </div>
            <div class="displayBlock">
                <input type="submit" value="Generate Password" id="btn">
            </div>
        </form>
    </div>
  <script>
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
  </script>
</body>
</html>
