let weightBorderColor = "rgb(106, 212, 134)";
let caloriesBorderColor = "rgb(15, 100, 200)";
let xLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let weightData = [184.6, 184.8, 184.8, 187.4, 184, 183.2];
let caloriesData = [3508, 3275, 3316, 3209, 3228, 3239];

let newData = {
  datasets: [
    {
      data: weightData,
      label: "Weight over time",
      borderColor: weightBorderColor,
      fill: false,

      // This binds the dataset to the left y axis
      yAxisID: "left-y-axis",
    },
    {
      data: caloriesData,
      label: "Calories over time",
      borderColor: caloriesBorderColor,
      fill: false,

      // This binds the dataset to the right y axis
      yAxisID: "right-y-axis",
    },
  ],
  labels: xLabel,
};

export { newData };
