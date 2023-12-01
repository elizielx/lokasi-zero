// orang typescript bang

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const toggleButton = document.getElementById("toggleButton");
    const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkMode) {
        wrapper.classList.add("dark-mode");
    } else {
        wrapper.classList.add("light-mode");
    }

    // toggle dark mode / light mode
    toggleButton.addEventListener("click", function () {
        wrapper.classList.toggle("dark-mode");
        wrapper.classList.toggle("light-mode");
    });

    // smooth scroll anchor
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
