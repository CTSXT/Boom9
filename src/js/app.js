import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.product');
  const price=document.querySelector(".price").innerHTML
  for(let i = 0 ; i<elements.length;i++){
    elements[i].setAttribute("data-price",price);
  }
  // This block will be executed once the page is loaded and ready
});
