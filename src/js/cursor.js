import gsap from 'gsap';

let isCursorInitialized = false;

export function initCursor() {
    // Disable custom cursor on mobile/tablet
    const isMobileOrTablet = window.matchMedia("(max-width: 1024px)").matches || window.matchMedia("(pointer: coarse)").matches;
    if (isMobileOrTablet) return;

    if (!isCursorInitialized) {
        createCursor();
        isCursorInitialized = true;
    }
    
    refreshCursorInteractions();
    initMagneticEffects();
}

function createCursor() {
    if (document.querySelector('.cursor-dot')) return; 

    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';
    
    // Inline styles for failsafe
    cursorDot.style.pointerEvents = 'none';
    cursorOutline.style.pointerEvents = 'none';
    cursorDot.style.zIndex = '99999';
    cursorOutline.style.zIndex = '99999';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    // Hide default cursor only after custom one is added
    document.body.style.cursor = 'none';

    // RAF for smoother follow
    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    const speed = 0.2;

    const mouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        // Dot follows instantly using transform (performant)
        gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
    };
    window.addEventListener("mousemove", mouseMove);

    // Animation Loop
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        
        gsap.set(cursorOutline, { x: pos.x, y: pos.y });
    });

    // Click Effects
    window.addEventListener("mousedown", () => {
        gsap.to(cursorOutline, { scale: 0.75, duration: 0.1, ease: "power2.out" });
    });

    window.addEventListener("mouseup", () => {
        gsap.to(cursorOutline, { scale: 1, duration: 0.1, ease: "power2.out" });
    });
}

function initMagneticEffects() {
    const magnets = document.querySelectorAll('.magnetic');
    
    magnets.forEach(el => {
        if(el.dataset.magneticBound) return;
        el.dataset.magneticBound = "true";

        let rect = null;

        el.addEventListener("mouseenter", () => {
            rect = el.getBoundingClientRect();
        });

        el.addEventListener("mousemove", (e) => {
            if (!rect) rect = el.getBoundingClientRect(); // Fallback
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(el, {
                x: x * 0.3, // Magnetic strength
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        el.addEventListener("mouseleave", () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

export function refreshCursorInteractions() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (!cursorOutline) return;

    // Magnetic / Hover Effects for Links
    const interactables = document.querySelectorAll('a, button, input, textarea, .magnetic');
    
    interactables.forEach(el => {
        if(el.dataset.cursorBound) return;
        el.dataset.cursorBound = "true";

        el.addEventListener('mouseenter', () => {
            gsap.to(cursorOutline, {
                scale: 1.5,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                duration: 0.2
            });
            gsap.to(cursorDot, { scale: 0, duration: 0.2 });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(cursorOutline, {
                scale: 1,
                backgroundColor: "transparent",
                duration: 0.2
            });
            gsap.to(cursorDot, { scale: 1, duration: 0.2 });
        });
    });
    
    // Re-init magnets if new content loaded
    initMagneticEffects();
}
