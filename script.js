document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerLinks = document.querySelector('.header__links');

    menuToggle.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (headerLinks.style.display === 'flex') {
            headerLinks.style.display = 'none';
        } else {
            headerLinks.style.display = 'flex';
        }
    }
  });
  