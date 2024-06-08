document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelectorAll(".logo img");
    let primaryLogoIndex = 0; // Index for the main logo
    let glitchInterval = 200; // Duration for the glitch effect in milliseconds
    let primaryLogo = logos[primaryLogoIndex];
    let timeoutId;

    function showRandomLogo() {
        // Remove the active/shake classes from all logos
        logos.forEach((logo) => logo.classList.remove("active", "shake"));

        // Display the primary logo
        primaryLogo.classList.add("active");

        // Trigger the glitch effect at random intervals
        timeoutId = setTimeout(() => {
            primaryLogo.classList.remove("active");
            let randomLogoIndex = Math.floor(Math.random() * logos.length);

            // Ensure the random logo is different from the primary logo
            while (randomLogoIndex === primaryLogoIndex) {
                randomLogoIndex = Math.floor(Math.random() * logos.length);
            }

            requestAnimationFrame(() => {
                logos[randomLogoIndex].classList.add("active", "shake");

                // Switch back to the primary logo after glitching
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        logos[randomLogoIndex].classList.remove(
                            "active",
                            "shake"
                        );
                        primaryLogo.classList.add("active");

                        // Remove the shake effect after completion
                        setTimeout(() => {
                            primaryLogo.classList.remove("shake");
                        }, 200);
                    });
                }, glitchInterval);
            });
        }, Math.random() * (5000 - 1000) + 1000); // timeout between 1 and 5 seconds
    }

    // Ensure only one interval is running at a time
    let intervalId = setInterval(
        showRandomLogo,
        Math.random() * (5000 - 1000) + 1000
    ); // Random interval between 1 and 5 seconds

    primaryLogo.classList.add("active");

    // Clear any existing interval before setting a new one
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(
        showRandomLogo,
        Math.random() * (5000 - 1000) + 1000
    );
});
