//import { projectsArray, localStorageFunctions } from "./localStorage";
import { EntryFactory } from "./entryObject.js";
import { allData } from "./dataset.js";
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

    tableFunctions.sortTable();
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

    if (!checkDate(date)) {
      return false;
    }

    for (let i = 0; i < numArray.length; i++) {
      // varifies proper data in textboxes
      if (numArray[i] == "") {
        // ignores blank data
        continue;
      }
      if (isNaN(numArray[i]) || numArray[i] < 0) {
        // verifies for a non negative number in box
        document.getElementById(textBoxIDArray[i]).style.borderColor = "red";
        checker = false;
      } else {
        document.getElementById(textBoxIDArray[i]).style.borderColor = "black";
      }
    }

    if (checker == false) {
      // alerts if input check fails.
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

  const checkDate = (date) => {
    if (date == "") {
      // if no date selected, date background set to red as alert
      document.getElementById("formDate").style.background =
        "rgb(250, 149, 149)";
      return false;
    }
    if (isDateInArray(date)) {
      // checks if date already exists to prevent multiple entries for same day
      alert(
        "Date already exists. Pick a new date or edit the entry for that date in the table."
      );
      return false;
    }
    return true;
  };

  const isDateInArray = (date) => {
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].date == date) {
        return true;
      }
    }
  };

  return {
    submitButtonPress,
    isNumberKey,
  };
})();

export { inputFormFunctions };
