import gsap from 'gsap';

export function initArsenal() {
    initTechGrid();
    // initMarquee(); // Handled via CSS for performance
}

function initTechGrid() {
    const grid = document.getElementById('arsenal-grid');
    if (!grid) return;

    grid.addEventListener('mousemove', (e) => {
        const rect = grid.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        grid.style.setProperty('--mouse-x', `${x}px`);
        grid.style.setProperty('--mouse-y', `${y}px`);
    });
}

