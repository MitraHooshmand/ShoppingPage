const allNodes = document.querySelectorAll(".product-item");
const allButtons = document.querySelectorAll(".filter");
////////////////////////////////////////// search by input
document.getElementById("search-input").addEventListener("keyup", function (e) {
  const inputParam = e.target.value.toLowerCase().trim();
  allNodes.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(inputParam)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

///////////////////////////////////////// add class to the buttons
const changeClass = function (catKeyword) {
  allButtons.forEach((button) => {
    button.dataset.filter === catKeyword
      ? button.classList.add("selected")
      : button.classList.remove("selected");
  });
};
////////////////////////////////////////// search by category using Event elegation

const buttonsParents = document.querySelector(".buttonsParents");
buttonsParents.addEventListener("click", (event) => {
  const categoryKeyword = event.target.childNodes[0].textContent.toLowerCase();
  changeClass(categoryKeyword);
  allNodes.forEach((item) => {
    if (categoryKeyword === "all") {
      item.style.display = "block";
    } else
      categoryKeyword === item.dataset.category
        ? (item.style.display = "block")
        : (item.style.display = "none");
  });
});
