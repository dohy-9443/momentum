const btn = document.querySelector("button");
const ulEl = document.querySelector("ul");

const Arr = [];
let count = 1;

btn.addEventListener("click", pushPrompt);

function pushPrompt() {
  let text = prompt("입력해보세요.");
  Arr.push(text);
  console.log(Arr);

  createLi();
}

function createLi() {
  const liEl = document.createElement("li");

  ulEl.appendChild(liEl);

  liEl.innerText = `${count} : ${Arr[Arr.length - 1]}`;

  count++;

  liEl.addEventListener("dblclick", (event) => {
    ulEl.removeChild(event.target);
  });
}
