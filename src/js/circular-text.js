
export function initCircularText() {
    const container = document.getElementById('circular-text-container');
    if (!container) return;

    // Use the string requested by user, repeated to fill circle
    // "designer developer" (corrected spelling)
    const originalText = "DESIGNER DEVELOPER • ";
    const repeatCount = 4; // Adjust based on length. "DESIGNER DEVELOPER • " is ~20 chars. 20*4=80. 360/80 = 4.5deg.
    // Width of char approx 14px? 
    // Circumference 2*pi*190 ~= 1200px.
    // 80 chars * 12px = 960px. 
    // Maybe repeat 4 times is good.
    
    let text = "";
    for(let i=0; i<repeatCount; i++) text += originalText;

    // Remove existing content
    container.innerHTML = '';
    
    const radius = 160; // Adjusted to match previous SVG size (approx 150-160px radius)

    const chars = text.split('');
    const totalChars = chars.length;
    const degreeIncrement = 360 / totalChars;

    chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        
        span.style.position = 'absolute';
        span.style.left = '50%';
        span.style.top = '50%';
        span.style.fontFamily = '"Outfit", sans-serif';
        span.style.fontWeight = '700';
        span.style.fontSize = '14px';
        span.style.textTransform = 'uppercase';
        span.style.color = 'white';
        
        // Center the span on its own origin, then rotate around ring, then push out
        span.style.transform = `translate(-50%, -50%) rotate(${index * degreeIncrement}deg) translateY(-${radius}px)`;
        
        container.appendChild(span);
    });
}
