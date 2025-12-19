document.addEventListener('DOMContentLoaded', function () {
    const snowContainer = document.createElement('div');
    snowContainer.setAttribute('id', 'snow-container');
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100vw';
    snowContainer.style.height = '100vh';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '9999';
    snowContainer.style.overflow = 'hidden';
    document.body.appendChild(snowContainer);

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random properties
        const startX = Math.random() * 100;
        const startOpacity = Math.random() * 0.5 + 0.3;
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;

        snowflake.style.left = cssPercent(startX);
        snowflake.style.opacity = startOpacity;
        snowflake.style.width = cssPixels(size);
        snowflake.style.height = cssPixels(size);
        snowflake.style.animationDuration = cssSeconds(duration);
        snowflake.style.animationDelay = cssSeconds(delay);

        snowContainer.appendChild(snowflake);

        // Remove snowflake after animation
        setTimeout(() => {
            snowflake.remove();
        }, (duration + delay) * 1000);
    }

    function cssPercent(val) { return val + '%'; }
    function cssPixels(val) { return val + 'px'; }
    function cssSeconds(val) { return val + 's'; }

    // Start snowing
    setInterval(createSnowflake, 200);

    // Initial burst
    for (let i = 0; i < 20; i++) {
        createSnowflake();
    }
});
