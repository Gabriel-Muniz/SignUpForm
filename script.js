const signup = document.querySelector(".btn-signup")

const validateForm = (pass1, pass2) => {
    if (pass1.value != pass2.value) {
        console.log("asda");
        return false;
    }
    return true;
}

signup.addEventListener("click", () => {
    let password = document.getElementById("password");
    let confPassword = document.getElementById("password-confirm");
    
    validateForm(password, confPassword);
})