const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

//espaço

const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu');

toggleSubmenuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const submenu = link.nextElementSibling;
    submenu.classList.toggle('show-submenu');
  });
});

//sub


