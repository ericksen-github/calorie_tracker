let weightBorderColor = "rgb(106, 212, 134)";
let caloriesBorderColor = "rgb(15, 100, 200)";
let xLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

let allData = [];

let lineOne = [];
let lineTwo = [];

let updatedData = {
  datasets: [
    {
      data: lineOne,
      label: "Weight over time",
      borderColor: weightBorderColor,
      fill: false,

      // This binds the dataset to the left y axis
      yAxisID: "left-y-axis",
    },
    {
      data: lineTwo,
      label: "Calories over time",
      borderColor: caloriesBorderColor,
      fill: false,

      // This binds the dataset to the right y axis
      yAxisID: "right-y-axis",
    },
  ],
  labels: xLabel,
};

export { updatedData, allData, lineOne, lineTwo };
