let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active'); // buka tutup navbar
    menuIcon.textContent = navbar.classList.contains('active') ? '✕' : '☰';
};