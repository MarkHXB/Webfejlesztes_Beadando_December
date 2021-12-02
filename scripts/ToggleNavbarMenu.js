let menuButton = document.querySelector('.toggle-nav-menu');
let navbarList = document.querySelector('.navbar-list');
menuButton.addEventListener('click', function () {
    //document.body.classList.toggle('active');
    navbarList.classList.toggle('active');
})