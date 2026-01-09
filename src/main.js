// Core GSAP Setup
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

import './app.css'
import { initCursor } from './js/cursor'
import { initAnimations } from './js/animation'
import { initProjectMixer } from './js/project-mixer'
import { initCircularText } from './js/circular-text'
import { initTilt } from './js/tilt'
import { initArsenal } from './js/arsenal'

// Smooth Scrolling removed in favor of native CSS for performance

// Initialize all effects
// Initialize all effects
function initApp() {
    try { ScrollTrigger.getAll().forEach(t => t.kill()); } catch(e) {}
    
    // Immediate Init (Critical for Visuals - Desktop Only)
    if (window.matchMedia("(min-width: 1024px)").matches && window.matchMedia("(pointer: fine)").matches) {
        try { initCursor(); } catch (e) { console.warn('Cursor init failed', e); }
    }
    // initAnimations deferred to prevent TBT during LCP

    // Chain heavier initializations nicely to yield to main thread between blocks
    setTimeout(() => {
        try { initAnimations(); } catch (e) { console.warn('Animations init failed', e); }
        
        setTimeout(() => {
            try { initProjectMixer(); } catch (e) { console.warn('Project Mixer init failed', e); }
            
            setTimeout(() => {
                try { initCircularText(); } catch (e) { console.warn('Circular Text init failed', e); }
                
                setTimeout(() => {
                    try { initTilt(); } catch (e) { console.warn('Tilt init failed', e); }
                    
                    setTimeout(() => {
                        try { initArsenal(); } catch (e) { console.warn('Arsenal init failed', e); }
                    }, 50); // Yield
                }, 50); // Yield
            }, 50); // Yield
        }, 50); // Yield
    }, 400); // Wait for initial render to settle
}

// Initialize on DOMContentLoaded to ensure reliable execution
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
