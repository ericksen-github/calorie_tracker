//import { projectsArray, localStorageFunctions } from "./localStorage";
import { EntryFactory } from "./entryObject.js";
import { allData, updateChartData } from "./dataset.js";
import { tableFunctions } from "./tableFunctions.js";

const inputFormFunctions = (() => {
  const submitButtonPress = () => {
    const date = document.getElementById("formDate").value;
    const weight = document.getElementById("weightTextBox").value;
    const calorie = document.getElementById("calorieTextBox").value;
    const exercise = document.getElementById("exerciseTextBox").value;
    const protein = document.getElementById("proteinTextBox").value;

    const tempArray = [weight, calorie, exercise, protein];

    if (!inputChecker(date, tempArray)) {
      return;
    }

    decimalCleanUp(tempArray);

    const newEntry = EntryFactory(date, tempArray);

    allData.push(newEntry);

    tableFunctions.sortTable(allData);
    updateChartData();
    removeForm();
  };

  const removeForm = () => {
    document.getElementById("formContainer").remove();
    document.getElementById("overlay").style.display = "none";
  };

  const inputChecker = (date, numArray) => {
    const textBoxIDArray = [
      "weightTextBox",
      "calorieTextBox",
      "exerciseTextBox",
      "proteinTextBox",
    ];
    let checker;

    if (date == "") {
      document.getElementById("formDate").style.background =
        "rgb(250, 149, 149)";
      return false;
    }

    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] == "") {
        continue;
      }
      if (isNaN(numArray[i]) || numArray[i] < 0) {
        document.getElementById(textBoxIDArray[i]).style.borderColor = "red";
        checker = false;
      } else {
        document.getElementById(textBoxIDArray[i]).style.borderColor = "black";
      }
    }

    if (checker == false) {
      alert(
        "Make sure you have a date selected and that you only have positive numbers in each text box."
      );
      return false;
    }

    return true;
  };

  // prevents user from typing non number characters into textbox
  const isNumberKey = (text, evt) => {
    const charCode = evt.which ? evt.which : evt.keyCode;

    // checks if a decimal already exists in the textbox
    if (charCode == 46) {
      if (text.indexOf(".") === -1) {
        return true;
      } else {
        return false;
      }
    }

    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }

    return true;
  };

  // removes hanging decimal from numbers
  const decimalCleanUp = (tempArray) => {
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].slice(tempArray[i].length - 1) == ".") {
        tempArray[i] = tempArray[i].slice(0, -1);
      }
    }
  };

  return {
    submitButtonPress,
    isNumberKey,
  };
})();

export { inputFormFunctions };
