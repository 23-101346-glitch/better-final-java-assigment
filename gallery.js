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

// Load saved theme on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// ===== Hero Slider =====
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let current = 0;

if (slides.length && next && prev) {
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    next.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prev.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    // Auto-slide every 4 seconds
    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 4000);
}

// ===== Navbar Scroll =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== Gallery Carousel & Lightbox =====
const galleryImages = [
    "assets/s31.png",
    "assets/s32.png",
    "assets/s33.png",
    "assets/s34.jpg",
    "assets/s35.png"
];

function loadGallery() {
    const track = document.getElementById("galleryTrack");
    if (!track) return;

    // Duplicate array for infinite effect
    const allImages = [...galleryImages, ...galleryImages];

    allImages.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "carousel-item";
        img.addEventListener("click", () => openLightbox(src));
        track.appendChild(img);
    });
}

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = src;
    lightbox.classList.remove("hidden");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.classList.add("hidden");
}

// Close lightbox events
document.getElementById("closeLightbox")?.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});

// Load gallery on page load
loadGallery();
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
