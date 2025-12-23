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
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if(preloader){
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 800);
    }
});
//  NAVBAR ACTIVE PAGE
const navButtons = document.querySelectorAll(".navbt");
const currentPage = window.location.pathname.split("/").pop().toLowerCase();

navButtons.forEach(btn => {
    btn.classList.remove("selected");

    if (btn.dataset.page === currentPage) {
        btn.classList.add("selected");
    }
});
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling down 300px
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// Scroll to top smoothly
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
