import { createInputForm } from "./modules/createInputForm";
import { tableFunctions } from "./modules/tableFunctions";
import { graphSelector } from "./modules/graphSelector";
import { localStorageFunctions, allData } from "./modules/localStorage";
import { clearData } from "./modules/clearData";

if (localStorageFunctions.storageAvailable("localStorage")) {
  localStorageFunctions.populateStorage();
}

document.getElementById("createFormButton").addEventListener("click", () => {
  createInputForm();
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

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  clearData();
});

// Adds listener to Date header for sorting options on click
document.getElementById("dateHeader").addEventListener("click", () => {
  tableFunctions.swapTrackerDirection();
});
