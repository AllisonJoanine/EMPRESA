const select = document.querySelector("#filter-select");
const items = document.querySelectorAll(".item");

select.addEventListener("change", function() {
  const selectedOption = this.value;
  
  for (const item of items) {

    if (selectedOption === "all") {
      item.classList.remove("hidden");
    } else if (item.classList.contains(selectedOption)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
      
    }
  }
});

/////////////

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


