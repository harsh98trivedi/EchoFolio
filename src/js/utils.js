export function splitText(element) {
    // Basic SplitText Implementation if external lib fails
    const text = element.innerText;
    element.innerHTML = '';
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.display = 'inline-block';
        if(char === ' ') span.style.width = '0.3em';
        element.appendChild(span);
    });
    return element.children;
}
