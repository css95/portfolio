// Hamburger Menu 

const hamburger = document.querySelector('.hamburger');
const drawer = document.getElementById('nav-drawer');

hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');

});

function closeMenu() {
    drawer.classList.remove('open');
};

document.addEventListener('click', (e) => {
    if(drawer.classList.contains('open') && !drawer.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu()
    }
})
