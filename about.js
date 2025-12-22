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
