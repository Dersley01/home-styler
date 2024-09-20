
let showMenu = false;
let isXIcon = false;

function toggleMenu() {
    showMenu = !showMenu;
    isXIcon = !isXIcon;

    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (showMenu) {
        menu.classList.add('show');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.remove('show');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

function closeMenu() {
    showMenu = false;
    isXIcon = false;

    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menu.classList.remove('show');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}



