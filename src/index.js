import { lineChart } from "./modules/Chart.js";
import { createInputForm } from "./modules/createInputForm";
import { tableFunctions } from "./modules/tableFunctions";

lineChart;

document.getElementById("createFormButton").addEventListener("click", () => {
  createInputForm();
});

// Adds listeners to swap button with active class to the selected button (highlight it)
const btns = document.getElementsByClassName("btns");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Adds listener to Date header for sorting options
