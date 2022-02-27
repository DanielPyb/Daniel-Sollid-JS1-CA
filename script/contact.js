const form = document.querySelector("#form-group");
const name = document.querySelector("#name")
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email")
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address")
const addressError = document.querySelector("#address-error");
const successText = document.querySelector(".success")

function formValidation(event){
    event.preventDefault();
    let counter = 0
    if(name.value.trim().length > 0){
        nameError.style.display = "none"
        counter++
    } else {
        nameError.style.display = "block"
    }
    if(subject.value.trim().length >= 10){
        subjectError.style.display = "none"
        counter++
    } else {
        subjectError.style.display = "block";
    }
    if(emailValidation(email.value) == true && email.value.trim().length > 0) {
        emailError.style.display = "none"
        counter++
    } else {
        emailError.style.display = "block"
    }
    if(address.value.trim().length >= 25){
        addressError.style.display = "none"
        counter++
    } else {
        addressError.style.display = "block";
    }
    if(counter == 4){
        //empties the value so that you can send in a new form without having to reload
        successText.style.display = "block"
        name.value = "";
        subject.value = "";
        email.value = "";
        address.value = "";
    } else {
        successText.style.display = "none"
    }
}
function emailValidation(email){
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/; // copied from https://digitalfortress.tech/tips/top-15-commonly-used-regex/ at step 3 "common Email ID's"
    const emailMatch = emailPattern.test(email);
    return emailMatch;
}

form.addEventListener("submit", formValidation);
