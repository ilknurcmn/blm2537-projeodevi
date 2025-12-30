document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".expandable");
    const overlay = document.getElementById("overlay");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("expanded");
            overlay.style.display = card.classList.contains("expanded")
                ? "block"
                : "none";
        });
    });

    overlay.addEventListener("click", () => {
        document.querySelectorAll(".expanded").forEach(card => {
            card.classList.remove("expanded");
        });
        overlay.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");

    themeSwitch.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            themeSwitch.textContent = "☀️";
        } else {
            themeSwitch.textContent = "🌙";
        }
    });
});
