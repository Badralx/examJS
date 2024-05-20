passwordInput = document.querySelector(".password-box input")
copyIcon = document.querySelector(".password-box .copy-icon")
rangeInput = document.querySelector(".range-box input")
sliderNumber = document.querySelector(".range-box .slider-number")
generateButton = document.querySelector(".generate-button")

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~"

//Generate pswd
function generatePassword(){
let newPassword = ""
for (let i = 0; i < rangeInput.value; i++) {
  let randomNumbers = Math.floor(Math.random() * allCharacters.length)
  newPassword =newPassword + allCharacters[randomNumbers]
}
passwordInput.value = newPassword
copyIcon.classList.replace("uil-file-check-alt", "uil-copy")
};

rangeInput.addEventListener("input", () => {
sliderNumber.innerText = rangeInput.value
generatePassword()
});

//copy passInput's value on copyIcon click
//copy passInput's value on copyIcon click
copyIcon.addEventListener("click", () => {
navigator.clipboard.writeText(passwordInput.value)
copyIcon.classList.replace("uil-copy", "uil-file-check-alt")
}) 

generatePassword()
generateButton.addEventListener("click", generatePassword)


//-------------------------------------------------------------CAPTCHA JS CODE--------------------------------------------------------

// Variable
captchaTextBox = document.querySelector(".captch_box input")
refreshButton = document.querySelector(".refresh_button")
captchaInputBox = document.querySelector(".captch_input input")
message = document.getElementById("msg")
submitButton = document.querySelector(".button")

// generate CAP
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7)
  const randomStringArray = randomString.split("")
  const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char))
  captchaText = changeString.join("   ")
  captchaTextBox.value = captchaText
  console.log(captchaText)
}

const captchaKeyUpValidate = () => {
  submitButton.classList.toggle("disabled", !captchaInputBox.value)
  if (!captchaInputBox.value) message.classList.remove("active")
}

const refreshBtnClick = () => {
  generateCaptcha()
  captchaInputBox.value = ""
  captchaKeyUpValidate()
}

// Validation
const submitBtnClick = () => {
  captchaText = captchaText.split("").filter((char) => char !== " ").join("")
  message.classList.add("active")
  if (captchaInputBox.value === captchaText) {
    message.innerText = "Entered captcha is correct"
    message.style.color = "#826afb"
  } else {
    message.innerText = "Entered captcha is not correct"
    message.style.color = "#FF2525"
  }
}

// Evenement
refreshButton.addEventListener("click", refreshBtnClick)
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate)
submitButton.addEventListener("click", submitBtnClick)
generateCaptcha()