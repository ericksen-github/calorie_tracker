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

let labelOne;
let LabelTwo;
let borderColorOne;
let borderColorTwo;

const graphSelector = (() => {
  const selectGraph = () => {
    const id = document.getElementsByClassName("active")[0].id;

    if (id == "weightButton") {
      pushOneData(0);
    } else if (id == "caloriesButton") {
      pushOneData(1);
    } else if (id == "exerciseButton") {
      pushOneData(2);
    } else if (id == "proteinButton") {
      pushOneData(3);
    } else if (id == "weightAndCalories") {
      pushTwoData();
    }
    lineChart.update();
  };

  const pushOneData = (num) => {
    let dataOne = [];
    let xLabels = [];
    const dataType = dataTypeArray[num];

    allData.forEach((ele) => {
      dataOne.push(ele[dataType]);
      xLabels.push(ele.date);
    });

    labelOne = titleLabelArray[num];
    borderColorOne = borderColorArray[num];

    chartOneDataset(dataOne, xLabels);
  };

  const pushTwoData = () => {
    let dataOne = [];
    let dataTwo = [];
    let xLabels = [];

    allData.forEach((ele) => {
      dataOne.push(ele.weight);
      dataTwo.push(ele.calorie);
      xLabels.push(ele.date);
    });

    labelOne = titleLabelArray[0];
    LabelTwo = titleLabelArray[1];
    borderColorOne = borderColorArray[0];
    borderColorTwo = borderColorArray[1];

    chartTwoDataSets(dataOne, dataTwo, xLabels);
  };

  const chartOneDataset = (dataOne, xLabels) => {
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

  const chartTwoDataSets = (dataOne, dataTwo, xLabels) => {
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
