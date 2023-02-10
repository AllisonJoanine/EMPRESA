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