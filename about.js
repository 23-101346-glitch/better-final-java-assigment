function toggleReadMore(btn) {
    const paragraph = btn.previousElementSibling;
    const moreText = paragraph.querySelector(".moretext");

    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        btn.textContent = "Read more";
    } else {
        moreText.style.display = "inline";
        btn.textContent = "Read less";
    }
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
