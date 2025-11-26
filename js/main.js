document.addEventListener("DOMContentLoaded", function () {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
        return; // Exit early, keep primary logo static
    }

    const logos = document.querySelectorAll(".logo img");
    const primaryLogoIndex = 0;
    const glitchDuration = 200;
    const primaryLogo = logos[primaryLogoIndex];

    let timeoutId;
    let intervalId;

    function getRandomDelay() {
        return Math.random() * 4000 + 1000; // 1-5 seconds
    }

    function showRandomLogo() {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            // Pick a random non-primary logo
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * logos.length);
            } while (randomIndex === primaryLogoIndex);

            // Swap to random logo with shake
            primaryLogo.classList.remove("active");
            logos[randomIndex].classList.add("active", "shake");

            // Swap back after glitch duration
            setTimeout(() => {
                logos[randomIndex].classList.remove("active", "shake");
                primaryLogo.classList.add("active");
            }, glitchDuration);
        }, getRandomDelay());
    }

    // Initialize
    primaryLogo.classList.add("active");
    intervalId = setInterval(showRandomLogo, getRandomDelay());

    // Cleanup on page hide (for SPA navigation or tab close)
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        } else if (!prefersReducedMotion) {
            intervalId = setInterval(showRandomLogo, getRandomDelay());
        }
    });
});
