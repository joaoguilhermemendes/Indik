import { setCookie, getCookie, checkCookie } from './cookies.js';
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Active Light theme
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        setCookie('theme', 'light', 7);
    });

    // Active Dark theme
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.classList.toggle('active');
        setCookie('theme', 'dark', 7);
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
