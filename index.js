const users = [
    {
        email: "male@test.com",
        password: "1234",
        gender: "male",
        redirect: "home.html"
    },
    {
        email: "female@test.com",
        password: "1234",
        gender: "female",
        redirect: "home.html"
    }
];

/* ===== ELEMENTS ===== */
const signInBtn = document.querySelector(".signinbt");
const emailDiv = document.querySelectorAll(".emaildiv")[0];
const passwordDiv = document.querySelectorAll(".emaildiv")[1];

/* make editable */
emailDiv.contentEditable = true;
passwordDiv.contentEditable = true;

/* ===== LOGIN ===== */
signInBtn.addEventListener("click", () => {
    const email = emailDiv.textContent.trim();
    const password = passwordDiv.textContent.trim();

    if (
        email === "" || email === "your@email.com" ||
        password === "" || password === "Password"
    ) {
        alert("Please enter email and password");
        return;
    }

    const foundUser = users.find(
        user => user.email === email && user.password === password
    );

    if (!foundUser) {
        alert("Wrong email or password");
        return;
    }

    // save user
    localStorage.setItem("loggedUser", JSON.stringify(foundUser));

    // redirect
    window.location.href = foundUser.redirect;
});
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if(preloader){
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 800);
    }
});