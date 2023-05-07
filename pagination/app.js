const containerOfPosts = document.getElementById("posts-container");
const paginationNumbers = document.getElementById("pagination");
const pages = document.querySelectorAll(".number");

let allData = [];
let allDataLength = 0;
let viewItems = [];
let page = 1;

let xmlHttpObj = new XMLHttpRequest();
containerOfPosts.innerHTML = "Loading ...";
xmlHttpObj.onload = function () {
  let data = xmlHttpObj.responseText;
  data = JSON.parse(data);
  allData = [...data];
  allDataLength = allData.length;
  viewItems = [...data.slice(0, 15)];
  console.log(viewItems);
  renderItems();
  renderViewPaginatedNumbers();
};
xmlHttpObj.open("get", "https://jsonplaceholder.typicode.com/posts");
xmlHttpObj.send();

function renderItems() {
  let content = "";
  viewItems.map(function (item) {
    // console.log(item);
    content += `<div class="col-4">
        <div class="item">
            <div class="cont-image">
                <img src="./images/3.jpg" alt="">
            </div>
            <div class="content">
                <h3>${item.title.slice(0, 15)} ... ${item.id}</h3>
                <p>${item.body.slice(0, 50)} ...</p>
                <button class="btn btn-info"> View Details </button>
            </div>

        </div>
    </div>`;
  });
  containerOfPosts.innerHTML = content;
}

function renderViewPaginatedNumbers() {
  let numbers = Math.floor(allData.length / 12);
  for (let i = 1; i <= numbers; i++) {
    if (i == 1) {
      paginationNumbers.innerHTML += `
        <span class="number prev-page"   id="prev"><</span>`;
      paginationNumbers.innerHTML += `
        <span class="number page-number" data-page="${i}"  id="prev">${i}</span>`;
    } else if (i == numbers) {
      paginationNumbers.innerHTML += `
        <span class="number next-page"   id="next">></span>`;
    } else {
      paginationNumbers.innerHTML += `
        <span class="number  page-number" data-page="${i}"  id="prev">${i}</span>`;
    }
  }
}

paginationNumbers.addEventListener("click", function (e) {
  let pageNumber = page;
  if (e.target.classList.contains("page-number")) {
    pageNumber = +e.target.dataset.page;
  } else if (e.target.classList.contains("next-page")) {
    if (page < allDataLength / 15) {
      pageNumber = page + 1;
    } else {
      pageNumber = page;
    }
  } else if (e.target.classList.contains("prev-page")) {
    if (page > 1) {
      pageNumber = page - 1;
    } else {
      pageNumber = page;
    }
  }

  let start = (pageNumber - 1) * 15;
  let end = pageNumber * 15;
  viewItems = [];
  viewItems = allData.slice(start, end);
  renderItems();
  page = pageNumber;
  addClassActive();
  window.scrollTo({
    top: 0,
  });
});

function addClassActive() {
  console.log(page);

  let pageNumbers = paginationNumbers.querySelectorAll(".page-number");
  pageNumbers.forEach(function (item) {
    item.classList.remove("active");
  });
  pageNumbers[page - 1].classList.add("active");
}
