import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// SplitType removed to avoid dependency issues
// Assuming basic text reveal for now to avoid extra dependency unless asked, but "SplitText" was requested. SplitType is the free alternative.

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
    
    // 1. Hero Reveal (Staggered)
    // 1. Hero Reveal (Staggered) - REMOVED for Performance (LCP)
    // CSS Keyframes used instead in app.css

    // 2. Scroll Triggered Fade Ups (Batching)
    ScrollTrigger.batch(".fade-up", {
        start: "top 85%",
        onEnter: batch => gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true
        })
    });

    // 3. Parallax Images (Heavy Animation Feel)
    gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.to(img, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom", 
                end: "bottom top",
                scrub: true
            }
        });
    });

    // 4. Magnetic Buttons (Simple GSAP implementation)
    const magnets = document.querySelectorAll('.magnetic');
    magnets.forEach((magnet) => {
        let bound = null;
        
        magnet.addEventListener('mouseenter', () => {
             bound = magnet.getBoundingClientRect();
        });

        magnet.addEventListener('mousemove', (e) => {
            if (!bound) bound = magnet.getBoundingClientRect();
            const x = (e.clientX - bound.left) - bound.width / 2;
            const y = (e.clientY - bound.top) - bound.height / 2;
            
            gsap.to(magnet, {
                x: x * 0.2, // Strength
                y: y * 0.2, 
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        magnet.addEventListener('mouseleave', () => {
            gsap.to(magnet, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
    });
}
