//import { projectsArray, localStorageFunctions } from "./localStorage";
import { EntryFactory } from "./entryObject.js";
import { allData, localStorageFunctions } from "./localStorage";
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

    if (allData.length == 0) {
      changeInitialGraph(tempArray);
    }

    const newEntry = EntryFactory(date, tempArray);
    allData.push(newEntry);
    compareDateLocations(date);
    tableFunctions.render();
    localStorageFunctions.saveNewData();
    removeForm();
  };

  // swaps graph display based on initial input data
  const changeInitialGraph = (tempArray) => {
    if (tempArray[0] > 0) {
      document.getElementById("weightButton").click();
    } else if (tempArray[1] > 0) {
      document.getElementById("caloriesButton").click();
    } else if (tempArray[2] > 0) {
      document.getElementById("exerciseButton").click();
    } else if (tempArray[3] > 0) {
      document.getElementById("proteinButton").click();
    }
  };

  const removeForm = () => {
    document.getElementById("formWrapper").remove();
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
    let counter = 0;

    for (let i = 0; i < numArray.length; i++) {
      // varifies proper data in textboxes
      if (numArray[i] == "") {
        counter++; // counts blanks to make sure all entries aren't empty
        continue; // otherwise ignores blanks
      }

      if (isNaN(numArray[i]) || numArray[i] < 0) {
        // verifies for a non negative number in box
        document.getElementById(textBoxIDArray[i]).style.borderColor = "red";
        checker = false;
      } else {
        document.getElementById(textBoxIDArray[i]).style.borderColor = "black";
      }
    }

    if (counter == 4) {
      // if all textboxes are blank, alerts user
      alert("All data entries can not be blank.");
      return false;
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

    const entryDate = new Date(allData[loc].date);
    // checks for dates above entry and adds blanks if needed
    if (allData[loc + 1]) {
      const nextDate = new Date(allData[loc + 1].date);
      let diffDays = Math.round(Math.abs((nextDate - entryDate) / oneDay));
      if (diffDays > 1) {
        addBlankDates(loc, diffDays, oneDay, "upper");
      }
    }

    // checks for dates below entry and adds blanks if needed
    if (allData[loc - 1]) {
      const priorDate = new Date(allData[loc - 1].date);
      let diffDays = Math.round(Math.abs((entryDate - priorDate) / oneDay));
      if (diffDays > 1) {
        addBlankDates(loc, diffDays, oneDay, "lower");
      }
    }
  };

  const addBlankDates = (loc, diffDays, oneDay, direction) => {
    while (diffDays > 1) {
      const entryDate = new Date(allData[loc].date);
      let otherDate;

      if (direction == "upper") {
        otherDate = new Date(allData[loc + 1].date);
        otherDate.setDate(otherDate.getDate() - 1); // reduces date of otherDate
      } else {
        otherDate = new Date(allData[loc - 1].date);
        otherDate.setDate(otherDate.getDate() + 1); // increments date of otherDate
      }

      otherDate = formatDateString(otherDate);

      const newEntry = EntryFactory(otherDate, [null, null, null, null]);
      allData.push(newEntry);
      tableFunctions.sortTable();

      otherDate = new Date(otherDate); //changes otherDate to match

      if (direction == "upper") {
        diffDays = Math.round(Math.abs((otherDate - entryDate) / oneDay));
      } else {
        diffDays = Math.round(Math.abs((entryDate - otherDate) / oneDay));
        loc++; // increments index because entries added below starting date
      }
    }
  };

  const formatDateString = (otherDate) => {
    let month = otherDate.getUTCMonth() + 1; //months from 1-12 (returns 0-11 + 1)
    let day = otherDate.getUTCDate();
    const year = otherDate.getUTCFullYear();

    if (month < 10) {
      month = "0" + month; // formats month to be consistant on table
    }

    if (day < 10) {
      day = "0" + day; // formats day to be consistant on table
    }
    return year + "-" + month + "-" + day; //same format as entry.date
  };

  return {
    submitButtonPress,
    isNumberKey,
    removeForm,
  };
})();

export { inputFormFunctions };
