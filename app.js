const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const banner = document.getElementById("banner");



menuIcon.addEventListener('click', function() {
    if(slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
        banner.style.top='200px';
    } else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
})