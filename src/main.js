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
// Timeout management for robust re-initialization
let initTimeouts = [];

function clearInitTimeouts() {
    initTimeouts.forEach(id => clearTimeout(id));
    initTimeouts = [];
}

// Initialize all effects
function initApp() {
    // 1. Clear any pending initializations from previous runs
    clearInitTimeouts();

    // 2. Safe cleanup of existing ScrollTriggers
    try { 
        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll) {
            ScrollTrigger.getAll().forEach(t => t.kill()); 
        }
    } catch(e) { console.log('Cleanup silent fail', e); }
    
    // 3. Immediate Init (Critical for Visuals - Desktop Only)
    // Cursor usually persists or re-binds nicely, safe to re-run
    if (window.matchMedia("(min-width: 1024px)").matches && window.matchMedia("(pointer: fine)").matches) {
        try { initCursor(); } catch (e) { console.warn('Cursor init failed', e); }
    }

    // 4. Staggered Initialization
    // We push timeouts to the array so we can cancel them if user navigates fast
    const t1 = setTimeout(() => {
        try { initAnimations(); } catch (e) { console.warn('Animations init failed', e); }
        
        const t2 = setTimeout(() => {
            try { initProjectMixer(); } catch (e) { console.warn('Project Mixer init failed', e); }
            
            const t3 = setTimeout(() => {
                try { initCircularText(); } catch (e) { console.warn('Circular Text init failed', e); }
                
                const t4 = setTimeout(() => {
                    try { initTilt(); } catch (e) { console.warn('Tilt init failed', e); }
                    
                    const t5 = setTimeout(() => {
                        try { initArsenal(); } catch (e) { console.warn('Arsenal init failed', e); }
                    }, 50);
                    initTimeouts.push(t5);
                }, 50);
                initTimeouts.push(t4);
            }, 50);
            initTimeouts.push(t3);
        }, 50);
        initTimeouts.push(t2);
    }, 400); // Wait for initial render to settle
    initTimeouts.push(t1);
}

// Initialize on DOMContentLoaded and Turbo Load
document.addEventListener('DOMContentLoaded', initApp);
document.addEventListener('turbo:load', initApp);
