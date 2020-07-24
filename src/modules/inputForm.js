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

    isDateInArray(date);
    decimalCleanUp(tempArray);

    const newEntry = EntryFactory(date, tempArray);
    allData.push(newEntry);
    compareDateLocations(date);
    tableFunctions.render();
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

    if (!checkDate(date)) {
      checker = false;
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

  // rounds to 1 decimal/removes hanging decimal points/changes 0 values to null
  const decimalCleanUp = (tempArray) => {
    for (let i = 0; i < tempArray.length; i++) {
      tempArray[i] = Math.round(tempArray[i] * 10) / 10;
      if (tempArray[i] == 0) {
        tempArray[i] = null;
      }
    }
  };

  const checkDate = (date) => {
    if (date == "") {
      // if no date selected, date background set to red as alert
      document.getElementById("formDate").style.background =
        "rgb(250, 149, 149)";
      return false;
    } else {
      return true;
    }
  };

  // check to remove existing entries for entered date
  const isDateInArray = (date) => {
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].date == date) {
        allData.splice(i, 1); // splices out entry
        break;
      }
    }
  };

  const compareDateLocations = (date) => {
    let loc; // index of date in allData
    const oneDay = 24 * 60 * 60 * 1000;
    tableFunctions.sortTable();

    // finds location of entry in allData
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].date == date) {
        loc = i;
        break;
      }
    }

    // checks for dates above entry and adds blanks if needed
    if (allData[loc + 1]) {
      const entryDate = new Date(allData[loc].date);
      const nextDate = new Date(allData[loc + 1].date);
      let diffDays = Math.round(Math.abs((nextDate - entryDate) / oneDay));
      if (diffDays > 1) {
        addUpperDates(loc, diffDays, oneDay);
      }
    }

    // checks for dates below entry and adds blanks if needed
    if (allData[loc - 1]) {
      const entryDate = new Date(allData[loc].date);
      const priorDate = new Date(allData[loc - 1].date);
      let diffDays = Math.round(Math.abs((entryDate - priorDate) / oneDay));
      if (diffDays > 1) {
        addLowerDates(loc, diffDays, oneDay);
      }
    }
  };

  const addLowerDates = (loc, diffDays, oneDay) => {
    while (diffDays > 1) {
      const entryDate = new Date(allData[loc].date);
      let priorDate = new Date(allData[loc - 1].date);

      priorDate.setDate(priorDate.getDate() + 1); // increments date of priorDate

      let month = priorDate.getUTCMonth() + 1; //months from 1-12 (returns 0-11 + 1)
      const day = priorDate.getUTCDate();
      const year = priorDate.getUTCFullYear();

      if (month < 10) {
        month = "0" + month; // formats month to be consistant on table
      }

      priorDate = year + "-" + month + "-" + day; //same format as entry.date

      const newEntry = EntryFactory(priorDate, [null, null, null, null]);
      allData.push(newEntry);
      tableFunctions.sortTable();

      priorDate = new Date(priorDate); //changes priorDate to match

      diffDays = Math.round(Math.abs((entryDate - priorDate) / oneDay));
      loc++;
    }
  };

  const addUpperDates = (loc, diffDays, oneDay) => {
    while (diffDays > 1) {
      const entryDate = new Date(allData[loc].date);
      let nextDate = new Date(allData[loc + 1].date);

      nextDate.setDate(nextDate.getDate() - 1); // reduces date of nextDate

      let month = nextDate.getUTCMonth() + 1; //months from 1-12 (returns 0-11 + 1)
      const day = nextDate.getUTCDate();
      const year = nextDate.getUTCFullYear();

      if (month < 10) {
        month = "0" + month; // formats month to be consistant on table
      }

      nextDate = year + "-" + month + "-" + day; //same format as entry.date

      const newEntry = EntryFactory(nextDate, [null, null, null, null]);
      allData.push(newEntry);
      tableFunctions.sortTable();

      nextDate = new Date(nextDate); //changes nextDate to match

      diffDays = Math.round(Math.abs((nextDate - entryDate) / oneDay));
    }
  };

  return {
    submitButtonPress,
    isNumberKey,
  };
})();

export { inputFormFunctions };
