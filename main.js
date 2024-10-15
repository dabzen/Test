document.addEventListener('DOMContentLoaded', () => {
    function centerContent() {
        const container = document.querySelector('.container');
        if (!container) return;

        const viewportHeight = window.innerHeight;
        const containerHeight = container.offsetHeight;
        const marginTop = (viewportHeight - containerHeight) / 2;

        container.style.marginTop = `${marginTop}px`;
    }

    // Center content on load
    centerContent();

    // Re-center content on window resize
    window.addEventListener('resize', () => {
        requestAnimationFrame(centerContent);
    });
});
