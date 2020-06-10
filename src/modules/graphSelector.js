import { allData } from "./dataset";
import { lineChart } from "./Chart";

const titleLabelArray = ["Weight", "Calories", "Exercise Calories", "Protein"];
const dataTypeArray = ["weight", "calorie", "exercise", "protein"];
const borderColorArray = [
  "rgb(106, 212, 134)", // green/weight
  "rgb(15, 100, 200)", // blue/calories
  "rgb(102, 57, 133)", // purple/exercise
  "rgb(110, 40, 40)", // red/protein
];

let dataOne = [];
let dataTwo = [];
let xLabels = [];
let labelOne;
let LabelTwo;
let borderColorOne;
let borderColorTwo;

const graphSelector = (() => {
  const selectGraph = () => {
    const id = document.getElementsByClassName("active")[0].id;

    if (id == "weightButton") {
      pushOneData(0);
      chartOneDataset();
    } else if (id == "caloriesButton") {
      pushOneData(1);
      chartOneDataset();
    } else if (id == "exerciseButton") {
      pushOneData(2);
      chartOneDataset();
    } else if (id == "proteinButton") {
      pushOneData(3);
      chartOneDataset();
    } else if (id == "weightAndCalories") {
      allData.forEach((ele) => {
        dataOne.push(ele.weight);
        dataTwo.push(ele.calorie);
        xLabels.push(ele.date);
      });
      labelOne = titleLabelArray[0];
      LabelTwo = titleLabelArray[1];
      borderColorOne = borderColorArray[0];
      borderColorTwo = borderColorArray[1];
      chartTwoDataSets();
    }
    lineChart.update();
  };

  const pushOneData = (num) => {
    dataOne.splice(0, dataOne.length);
    xLabels.splice(0, xLabels.length);

    const dataType = dataTypeArray[num];
    allData.forEach((ele) => {
      dataOne.push(ele[dataType]);
      xLabels.push(ele.date);
    });

    labelOne = titleLabelArray[num];
    borderColorOne = borderColorArray[num];
  };

  const chartOneDataset = () => {
    const oneDataSet = {
      datasets: [
        {
          data: dataOne,
          label: [labelOne],
          borderColor: borderColorOne,
          fill: false,
        },
      ],
      labels: xLabels,
    };

    const oneAxis = {
      scales: {
        yAxes: [
          {
            ticks: {},
          },
        ],
      },
    };

    lineChart.data = oneDataSet;
    lineChart.options = oneAxis;
  };

  const chartTwoDataSets = () => {
    const twoDataSets = {
      datasets: [
        {
          data: dataOne,
          label: labelOne,
          borderColor: borderColorOne,
          fill: false,

          // This binds the dataset to the left y axis
          yAxisID: "left-y-axis",
        },
        {
          data: dataTwo,
          label: LabelTwo,
          borderColor: borderColorTwo,
          fill: false,

          // This binds the dataset to the right y axis
          yAxisID: "right-y-axis",
        },
      ],
      labels: xLabels,
    };

    const twoAxis = {
      scales: {
        yAxes: [
          {
            id: "left-y-axis",
            type: "linear",
            position: "left",
            ticks: {},
          },
          {
            id: "right-y-axis",
            type: "linear",
            position: "right",
            ticks: {},
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };

    lineChart.data = twoDataSets;
    lineChart.options = twoAxis;
  };

  return {
    selectGraph,
  };
})();

export { graphSelector };
