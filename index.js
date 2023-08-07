// There are several ways to query/select and modify HTML
// elements in JavaScript, we'll use 2 ways
// here, which are 'getElementById' and the
// 'querySelector' method.

// let countEl = document.getElementById('count-el')

// let count = 0

// function increment() {
//   count = count + 1
//   countEl.innerHTML = count
//   console.log(count)
// }


let countEl = document.querySelector("h2");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}

// save()
