hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorItems = document.querySelectorAll(".color");
const inputColor = document.querySelector("input[name='color']");
let container = document.getElementById("hamada");

colorItems.forEach(function (item) {
  item.style.backgroundColor = generateRandomColor();
  item.addEventListener("click", function (e) {
    setBodyBackground(e.target.style.backgroundColor);
    removeSelectedBorder();
    item.classList.add("selected-color");
  });
});

function generateRandomColor() {
  let color = "";
  for (let i = 0; i <= 5; i++) {
    color += hexCode[parseInt(Math.random() * hexCode.length)];
  }
  return "#" + color;
}

function removeSelectedBorder() {
  colorItems.forEach(function (item) {
    item.classList.remove("selected-color");
  });
}

inputColor.addEventListener("change", function (e) {
  setBodyBackground(inputColor.value);
});

function setBodyBackground(color) {
  localStorage.setItem("color", color);
  document.body.style.backgroundColor = color;
}

if (localStorage.getItem("color")) {
  document.body.style.backgroundColor = localStorage.getItem("color");
}

let data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "hamada nena",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "nader",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "mostafa",
    completed: false,
  },
];

// Array
// let name = "ahmed";
// console.log(name.includes("k"));

data = data.filter(function (item) {
  return item.title.includes("m");
});
let convertedData = data.map(function (item) {
  return `
    <h3>${item.userId} </h3>
    <h3>${item.id} </h3>
    <h3>${item.title} </h3>
    <h3>${item.completed} </h3>
    <hr>
    `;
});

// console.log(convertedData);
container.innerHTML = convertedData.join("");

// // setBodyBackground(localStorage.getItem("color"));
// let numbers = [1, 2, 3, 4, 5];
// let filteredItems = numbers.filter(function (item) {
//   return item > 2;
// });

// console.log(filteredItems);

// let convertedElements = numbers.map(function (item) {
//   return `<h1> ${item}</h1>`;
// });

// container.innerHTML = convertedElements.join("");

// console.log(convertedElements);

// function setItems() {
//   let content = "";
//   for (let i = 0; i < numbers.length; i++) {
//     content += addElement(numbers[i]);
//   }

//   container.innerHTML += content;
// }
// function addElement(el) {
//   return `<h1> ${el}</h1>`;
// }

// setItems();

function arraySum(array, initial) {
  let sum = initial;
  array.forEach(function (item) {
    sum += item;
  });

  return sum;
}

console.log(arraySum([1, 2, 3, 6, 5, 8, 9, 10], 10));

let numbers = [1, 2, 3, 6, 5, 8, 9, 10];

let check = numbers.every(function (item) {
  return item <= 10;
});

console.log(check);

// let result = numbers.reduce(function (n, item) {
//   return n + item;
// }, 10);

// console.log(result);
