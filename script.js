const allNodes = document.querySelectorAll(".product-item");

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
////////////////////////////////////////// search by category using Event elegation

const buttonsParents = document.querySelector(".buttonsParents");
buttonsParents.addEventListener("click", (event) => {
  const categoryKeyword = event.target.childNodes[0].textContent.toLowerCase();
  allNodes.forEach((item) => {
    if (categoryKeyword === "all") {
      item.style.display = "block";
    } else
      categoryKeyword === item.dataset.category
        ? (item.style.display = "block")
        : (item.style.display = "none");
  });
});
