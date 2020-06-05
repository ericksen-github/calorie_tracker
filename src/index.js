import { lineChart } from "./modules/Chart.js";
import { createInputForm } from "./modules/createInputForm";

lineChart;
console.log("index on");

document.getElementById("createFormButton").addEventListener("click", () => {
  createInputForm();
});

// Add active class to the current button (highlight it)

const btns = document.getElementsByClassName("btns");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
