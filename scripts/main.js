// Select-item-box show/hide
const selectBox = document.querySelector('.select-item-box'),
    selectItems =  document.querySelectorAll('.select-items');

selectItems.forEach(item => {
    item.addEventListener('click', () => {
        selectBox.classList.toggle('active');
    });
});

// <!-- Newsletter Modal -->
const closeBtn = document.querySelector('.news-close-btn'),
    newsletterBox = document.querySelector('.newsletter-box'),
    newsletterLink = document.querySelector('#newsletter-link');

// Pop-up window
newsletterLink.addEventListener('click', () => {
    newsletterBox.classList.toggle('popup');
});
// Close the window 
closeBtn.addEventListener('click', () => {
    newsletterBox.classList.remove('popup');
});

// Show Navigation Menu on click 
const menuToggle = document.querySelector('.menu-toggle'),
    navMenu = document.querySelector('.nav-menu'),
    navClose = document.querySelector('.nav-close-btn'),
    navOverlay = document.querySelector('.nav-overlay'),
    navListItems = document.querySelector('.nav-list-items'),
    navListBottomItems = document.querySelector('.nav-list-bottom');
// Show
menuToggle.addEventListener('click', () => {
    navMenu.style.display = "block";
    navClose.style.display = "initial";
    navOverlay.style.display = "initial";
});
// Hide
[navClose, navOverlay].forEach(el => {
    el.addEventListener('click', () => {
        navMenu.style.display = "none";
        navClose.style.display = "none";
        navOverlay.style.display = "none";
    });
})