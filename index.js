const button = document.getElementById("submitBtn");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const error = document.getElementById("errorMessage");

button.addEventListener("click", submitBtn);
password.addEventListener("click",clearStyle);
passwordConfirm.addEventListener("click",clearStyle);

// clears styles on password inputs when you go to
// retype password. Also takes away password 
// notification message.
function clearStyle(e){
    error.innerText = "";
    for (border of ["redBorder","greenBorder"]){

        if (password.classList.contains(border)){ //only checking one element since both elemenents should have same class
            password.classList.remove(border);
            passwordConfirm.classList.remove(border);
        }
    }
}

// checks if password matches when "Create Account" is pressed.
// adds appropriate styles and notifification
function submitBtn(e) {
    let passText = password.value;
    let passConText = passwordConfirm.value;
    console.log(error.classList)

    // console.log(passText, passConText);

    if (passText === passConText) {
        // adds green border and "passwords match" text
        password.classList.add("greenBorder");
        passwordConfirm.classList.add("greenBorder");
        error.innerText = "Passwords match";

        // adds text color to password notification
        if (error.classList.contains("error")) {
            error.classList.remove("error");
        }
        if (!error.classList.contains("correct")) {
            error.classList.add("correct");
        }
    }
    else {
        // adds red border and "passwords do not match" text
        password.classList.add("redBorder");
        passwordConfirm.classList.add("redBorder");
        error.innerText = "Passwords do not match";

        // adds color to password notification text
        if (error.classList.contains("correct")) {
            error.classList.remove("correct");
        }
        if (!error.classList.contains("error")) {
            error.classList.add("error");
        }
    }
}