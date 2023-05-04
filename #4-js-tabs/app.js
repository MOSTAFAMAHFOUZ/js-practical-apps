const tabTitle = document.querySelectorAll(".tab-title");
const tabContent = document.querySelectorAll(".tab-content");

tabTitle.forEach(function (el) {
  el.addEventListener("click", function () {
    removeClassActive(tabTitle);
    el.classList.add("active");
    let dataId = el.dataset.id;
    removeClassActive(tabContent);
    document.getElementById(dataId).classList.add("active");
  });
});

function removeClassActive(items) {
  items.forEach((element) => {
    element.classList.remove("active");
  });
}
