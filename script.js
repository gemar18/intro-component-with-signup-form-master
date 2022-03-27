const submitBtn = document.getElementById("submitBtn");
const inputs = document.querySelectorAll("input");
const email = document.getElementById("email");

submitBtn.addEventListener("click", validate);
submitBtn.addEventListener("click", validateEmail);

function validate(e) {
    
e.preventDefault();
inputs.forEach((input) => {
if (input.value =="") {
    input.classList.add("active");
    input.nextElementSibling.classList.add("error-msg");

} else {
input.nextElementSibling.classList.remove("active");
input.classList.remove("active");
}
});
}

function validateEmail() {
let reg = /^[^]+@[^]+\.[a-z]{2,3}$/;

if (email.value.match(reg)) {
    email.classList.remove("active");
email.nextElementSibling.classList.remove("active");

} else {
    email.classList.add("active");
email.nextElementSibling.classList.add("error-msg");

}
}
