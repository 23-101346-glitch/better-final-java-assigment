// ===== Dark Mode Toggle =====
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Make fields editable
const editableFields = document.querySelectorAll(".divname h3, .divnamee h3");
editableFields.forEach(field => {
    field.setAttribute("contentEditable", "true");

    const placeholderMap = {
        "Your Name": "Your Name",
        "your.email@example.com": "your.email@example.com",
        "(123) 456-7890": "(123) 456-7890",
        "Tell us how we can help you...": "Tell us how we can help you...",
        "Subject": "Subject"
    };

    field.addEventListener("focus", () => {
        if (Object.values(placeholderMap).includes(field.textContent)) field.textContent = "";
    });

    field.addEventListener("blur", () => {
        if (field.textContent.trim() === "") {
            for (let key in placeholderMap) {
                if (field.textContent === "" || field.textContent === key) {
                    field.textContent = placeholderMap[key];
                }
            }
        }
    });
});

// Get button and fields
const sendBtn = document.querySelector(".sendusamessage");
const nameField = document.querySelector(".baby1:nth-child(1) .divname h3");
const emailField = document.querySelector(".baby1:nth-child(2) .divname h3");
const phoneField = document.querySelector(".baby1:nth-child(3) .divname h3");
const subjectField = document.querySelector(".baby1:nth-child(4) .divname h3") || document.querySelector(".baby1:nth-child(4) .divname");
const messageField = document.querySelector(".baby2 .divnamee h3");

// Validate form
function validateForm() {
    let errors = [];
    if (!nameField.textContent.trim() || nameField.textContent === "Your Name") errors.push("Name is required");
    if (!emailField.textContent.trim() || emailField.textContent === "your.email@example.com") errors.push("Email is required");
    if (!subjectField.textContent.trim() || subjectField.textContent === "Subject") errors.push("Subject is required");
    if (!messageField.textContent.trim() || messageField.textContent === "Tell us how we can help you...") errors.push("Message is required");

    if (errors.length > 0) {
        alert("Please fill all required fields:\n- " + errors.join("\n- "));
        return false;
    }
    return true;
}

// Save data to localStorage
function saveFormData() {
    const formData = {
        name: nameField.textContent,
        email: emailField.textContent,
        phone: phoneField.textContent,
        subject: subjectField.textContent,
        message: messageField.textContent
    };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
}

// Show success message
function showSuccessSendMsg() {
    alert("Your message has been sent successfully!");
}

// Button click
sendBtn.addEventListener("click", () => {
    if (validateForm()) {
        saveFormData();
        showSuccessSendMsg();

        // Reset placeholders
        nameField.textContent = "Your Name";
        emailField.textContent = "your.email@example.com";
        phoneField.textContent = "(123) 456-7890";
        subjectField.textContent = "Subject";
        messageField.textContent = "Tell us how we can help you...";
    }
});
