import { createInputForm } from "./createInputForm";
import { tableFunctions } from "./tableFunctions";
import { graphSelector } from "./graphSelector";
import { showDemoArray } from "./demoData";
import { clearData } from "./clearData";

const createInitialListeners = () => {
  const demoButton = document.getElementById("demoButton");
  demoButton.addEventListener("click", () => {
    showDemoArray();
  });

  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", () => {
    clearData();
  });

  // Adds listeners to swap button with active class to the selected button (highlight it)
  // also adds listener for swapping graph display based on selected data type
  const btns = document.getElementsByClassName("btns");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      graphSelector.selectGraph();
    });
  }

  document.getElementById("createFormButton").addEventListener("click", () => {
    createInputForm();
  });

  // Adds listener to Date header for sorting options on click
  document.getElementById("dateHeader").addEventListener("click", () => {
    tableFunctions.swapTrackerDirection();
  });
};

export { createInitialListeners };
