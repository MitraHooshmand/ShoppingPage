document.getElementById("search-input").addEventListener("keyup", function (e) {
  const inputParam = e.target.value.toLowerCase().trim();
  const allNodes = document.querySelectorAll(".product-item");
  allNodes.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(inputParam)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
