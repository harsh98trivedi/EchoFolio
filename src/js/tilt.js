export class VanillaTilt {
    constructor(element) {
        this.element = element;
        this.settings = {
            max: 15,
            perspective: 1000,
            scale: 1,
            speed: 400,
            glare: false,
            "max-glare": 1,
        };
        
        // Read data attributes
        if(this.element.dataset.tiltMax) this.settings.max = parseInt(this.element.dataset.tiltMax);
        if(this.element.dataset.tiltSpeed) this.settings.speed = parseInt(this.element.dataset.tiltSpeed);
        if(this.element.dataset.tiltGlare === "") this.settings.glare = true;
        if(this.element.dataset.tiltMaxGlare) this.settings["max-glare"] = parseFloat(this.element.dataset.tiltMaxGlare);

        this.init();
    }

    init() {
        this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.element.addEventListener("mouseleave", this.onMouseLeave.bind(this));
        this.element.addEventListener("mouseenter", this.onMouseEnter.bind(this));
        
        // Add glare element if enabled
        if (this.settings.glare) {
            this.glareElementWrapper = document.createElement("div");
            this.glareElementWrapper.classList.add("js-tilt-glare");
            this.glareElementWrapper.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none;";
            
            this.glareElement = document.createElement("div");
            this.glareElement.classList.add("js-tilt-glare-inner");
            this.glareElement.style.cssText = `position: absolute; top: 50%; left: 50%; pointer-events: none; background-image: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); width: 200%; height: 200%; transform: rotate(180deg) translate(-50%, -50%); transform-origin: 0% 0%; opacity: 0;`;
            
            this.glareElementWrapper.appendChild(this.glareElement);
            this.element.appendChild(this.glareElementWrapper);
        }
    }

    onMouseEnter() {
        this.element.style.transition = `none`;
    }

    onMouseMove(event) {
        const rect = this.element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const xPercentage = x / rect.width;
        const yPercentage = y / rect.height;
        
        const xRotation = (this.settings.max * -1) + (xPercentage * this.settings.max * 2);
        const yRotation = this.settings.max - (yPercentage * this.settings.max * 2);
        const zRotation = 0; // Can add data-tilt-axis later
        
        this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(${-yRotation}deg) rotateY(${-xRotation}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`;
        
        if (this.settings.glare) {
            const glareOpacity = (yPercentage * this.settings["max-glare"]) + (xPercentage * this.settings["max-glare"]) / 2; // Rough approximation
            this.glareElement.style.transform = `rotate(${event.clientX}deg) translate(-50%, -50%)`; // Simplify rotation
            this.glareElement.style.opacity = `${glareOpacity}`;
        }
    }

    onMouseLeave() {
        this.element.style.transition = `transform ${this.settings.speed}ms cubic-bezier(.03,.98,.52,.99)`;
        this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        
        if (this.settings.glare) {
            this.glareElement.style.opacity = 0;
        }
    }
}

export function initTilt() {
    const elements = document.querySelectorAll("[data-tilt]");
    elements.forEach(el => new VanillaTilt(el));
}
