document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const selectedbtn = document.querySelector('.selected-btn');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.classList.toggle('active');
    });
});

document.querySelectorAll('.selected-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.selected-btn').forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

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

document.querySelectorAll('.selected-btn-media').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.selected-btn-media').forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
    });
});
