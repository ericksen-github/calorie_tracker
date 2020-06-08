import { lineChart } from "./Chart";

let weightBorderColor = "rgb(106, 212, 134)";
let caloriesBorderColor = "rgb(15, 100, 200)";

let allData = [];

let lineOne = [];
let lineTwo = [];
let Xlabels = [];

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
  labels: Xlabels,
};

const updateChartData = () => {
  // clears arrays used to load data
  lineOne.splice(0, lineOne.length);
  lineTwo.splice(0, lineTwo.length);
  Xlabels.splice(0, Xlabels.length);

  // adds in data for each array
  allData.forEach((element) => {
    lineOne.push(element.weight);
    lineTwo.push(element.calorie);
    Xlabels.push(element.date);
  });

  lineChart.data = updatedData;
  lineChart.update();
};

export { allData, updateChartData };
