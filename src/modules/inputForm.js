//import { projectsArray, localStorageFunctions } from "./localStorage";
import { EntryFactory } from "./entryObject.js";
import { allData, updatedData, lineOne, lineTwo } from "./dataset.js";
import { lineChart } from "./Chart.js";
import { render } from "./tableFunctions.js";

const inputFormFunctions = (() => {
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

    allData.forEach((element) => {
      lineOne.push(element.weight);
    });

    allData.forEach((element) => {
      lineTwo.push(element.calorie);
    });

    lineChart.data = updatedData;
    lineChart.update();

    render(allData);
    removeForm();
  };

  const removeForm = () => {
    document.getElementById("formContainer").remove();
    document.getElementById("overlay").style.display = "none";
  };

  const inputChecker = (date, numArray) => {
    let checker;

    if (date == "") {
      document.getElementById("formDate").style.background =
        "rgb(250, 149, 149)";
      return false;
    }

    numArray.forEach((element) => {
      if (element == "") {
        return;
      }
      if (isNaN(element) || element < 0) {
        console.log(element + "TextBox");
        document.getElementById(element + "TextBox").style.borderColor = "red";
        checker = false;
      } else {
        document.getElementById(element + "TextBox").style.borderColor =
          "black";
      }
    });

    if (checker == false) {
      alert(
        "Make sure you have a date selected and that you only have positive numbers in each text box."
      );
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
