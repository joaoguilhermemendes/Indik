// Load/Set the theme preference
import { setCookie, getCookie, checkCookie } from './cookies.js';
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check the current theme and set it
    const currentTheme = checkCookie();
    if (currentTheme === "dark") {
        body.classList.add('dark-theme');
        themeToggle.classList.add('active');
    }

    // Changes the theme and saves the user's preference
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.classList.toggle('active');

        const newTheme = body.classList.contains('dark-theme') ? "dark" : "light";
        setCookie('theme', newTheme, 365); // Save the preference for 1 year
    });
});

// Operation type buttons
document.querySelectorAll('.selected-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Change and lock the button color to gray when have been clicked
        document.querySelectorAll('.selected-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Change the operator symbol (add, remove, edit, switch) based in selection
        const operationSymbol = document.getElementById('operation-symbol');
        operationSymbol.innerHTML = '';
        
        const symbol = button.getAttribute('data-symbol');
        
        if (symbol === "+" || symbol === "x") {
            operationSymbol.textContent = symbol;
        } else if (symbol === "switch") {
            const img = document.createElement('img');
            img.src = 'styles/images/switch-icon.png';  
            img.alt = 'Switch';
            img.style.width = '30px'; 
            operationSymbol.appendChild(img);
        } else if (symbol === "edit") {
            const img = document.createElement('img');
            img.src = 'styles/images/edit-icon.png';  
            img.alt = 'Edit';
            img.style.width = '30px'; 
            operationSymbol.appendChild(img);
        }
    });
});

// Media type buttons
document.querySelectorAll('.selected-btn-media').forEach(button => {
    button.addEventListener('click', () => {
        // Change and lock the button color when have been clicked
        document.querySelectorAll('.selected-btn-media').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
