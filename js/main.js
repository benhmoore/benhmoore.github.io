document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelectorAll(".logo img");
    let primaryLogoIndex = 0; // Index for the main logo
    let glitchInterval = 200; // Duration for the glitch effect in milliseconds
    let primaryLogo = logos[primaryLogoIndex];

    function showRandomLogo() {
        // Remove the active/shake classes from all logos
        logos.forEach((logo) => logo.classList.remove("active", "shake"));

        // Display the primary logo
        primaryLogo.classList.add("active");

        // Trigger the glitch effect at random intervals
        setTimeout(() => {
            primaryLogo.classList.remove("active");
            let randomLogoIndex = Math.floor(Math.random() * logos.length);

            // Ensure the random logo is different from the primary logo
            while (randomLogoIndex === primaryLogoIndex) {
                randomLogoIndex = Math.floor(Math.random() * logos.length);
            }
            logos[randomLogoIndex].classList.add("active", "shake");

            // Switch back to the primary logo after glitching
            setTimeout(() => {
                logos[randomLogoIndex].classList.remove("active", "shake");
                primaryLogo.classList.add("active", "shake");

                // Remove the shake effect after completion
                setTimeout(() => {
                    primaryLogo.classList.remove("shake");
                }, 500);
            }, glitchInterval);
        }, Math.random() * (5000 - 1000) + 1000); // timeout between 1 and 5 seconds
    }

    setInterval(showRandomLogo, Math.random() * (5000 - 1000) + 1000); // Random interval between 1 and 5 seconds

    primaryLogo.classList.add("active");
});
