const reloadData = document.querySelector("#reload");
const id = document.getElementById("id");
const advice = document.getElementById("advice");

// eslint-disable-next-line space-before-function-paren
const getData = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      id.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
};

window.onload = getData;

reloadData.addEventListener("click", getData);
