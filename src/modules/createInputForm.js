import { inputFormFunctions } from "./inputForm";

const createInputForm = () => {
  document.getElementById("overlay").style.display = "block";

  const containerWrapper = document.createElement("div");
  containerWrapper.id = "formWrapper";

  const container = document.createElement("div");
  container.id = "formContainer";
  containerWrapper.appendChild(container);

  const formTitle = document.createElement("div");
  formTitle.id = "formTitle";
  formTitle.innerHTML = "Input Form";
  container.appendChild(formTitle);

  const formDateContainer = document.createElement("div");
  formDateContainer.id = "formDateContainer";
  container.appendChild(formDateContainer);

  const formDate = document.createElement("input");
  formDate.setAttribute("type", "date");
  formDate.id = "formDate";
  formDate.addEventListener("change", () => {
    document.getElementById("formDate").style.background = "white";
  });
  formDateContainer.appendChild(formDate);

  createTextBoxes(container);

  const buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  container.appendChild(buttonContainer);

  const submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.innerHTML = "Submit";
  submitButton.addEventListener("click", inputFormFunctions.submitButtonPress);
  buttonContainer.appendChild(submitButton);

  const cancelButton = document.createElement("button");
  cancelButton.id = "cancelButton";
  cancelButton.innerHTML = "Cancel";
  cancelButton.addEventListener("click", () => {
    removeForm();
  });
  buttonContainer.appendChild(cancelButton);

  document.getElementById("main").appendChild(containerWrapper);
};

const removeForm = () => {
  document.getElementById("formContainer").remove();
  document.getElementById("overlay").style.display = "none";
};

const createTextBoxes = (container) => {
  const array = [
    ["weight", "Weight", "weightTextBox"],
    ["calorie", "Calorie Intake", "calorieTextBox"],
    ["exercise", "Exercise Calories", "exerciseTextBox"],
    ["protein", "Protein Intake", "proteinTextBox"],
  ];

  array.forEach((element) => {
    const newContainer = document.createElement("div");
    newContainer.className = "titleTextContainer";
    newContainer.id = element[0] + "Container";

    const newDiv = document.createElement("div");
    newDiv.className = "formSubtitle";
    newDiv.innerHTML = element[1];
    newContainer.appendChild(newDiv);

    const newTextBox = document.createElement("input");
    newTextBox.setAttribute("type", "text");
    newTextBox.id = element[2];
    newTextBox.className = "formTextBox";
    newTextBox.onkeypress = () => {
      return inputFormFunctions.isNumberKey(event.target.value, event);
    };

    if (element[0] == "weight") {
      newTextBox.placeholder = "in lbs";
    } else if (element[0] == "protein") {
      newTextBox.placeholder = "in grams";
    }

    newContainer.appendChild(newTextBox);

    container.appendChild(newContainer);
  });
};

export { createInputForm };
