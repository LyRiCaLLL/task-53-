import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  hotProductsList.forEach((hotProduct) => {
    hotProduct.innerHTML += '🔥';
  });
});
