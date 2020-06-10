import { allData } from "./dataset";
import { lineChart } from "./Chart";

const titleLabelArray = ["Weight", "Calories", "Exercise Calories", "Protein"];
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

const selectGraph = () => {
  selectDataSet();
};

const selectDataSet = () => {
  const id = document.getElementsByClassName("active")[0].id;
  let dataOne = [];
  let dataTwo = [];
  let Xlabels = [];

  if (id == "weightButton") {
    allData.forEach((ele) => {
      dataOne.push(ele.weight);
      Xlabels.push(ele.date);
    });
    labelOne = titleLabelArray[0];
    borderColorOne = borderColorArray[0];
    chartOneDataset(dataOne, labelOne, borderColorOne);
  } else if (id == "weightAndCalories") {
    allData.forEach((ele) => {
      dataOne.push(ele.weight);
      dataTwo.push(ele.calorie);
      Xlabels.push(ele.date);
    });
    labelOne = titleLabelArray[0];
    LabelTwo = titleLabelArray[1];
    borderColorOne = borderColorArray[0];
    borderColorTwo = borderColorArray[1];
    chartTwoDataSets(
      dataOne,
      labelOne,
      borderColorOne,
      dataTwo,
      LabelTwo,
      borderColorTwo
    );
  }
  lineChart.update();
};

const chartOneDataset = (dataOne, labelOne, borderColorOne) => {
  const oneDataSet = {
    datasets: [
      {
        data: dataOne,
        label: labelOne,
        borderColor: borderColorOne,
        fill: false,
      },
    ],
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

const chartTwoDataSets = (
  dataOne,
  labelOne,
  borderColorOne,
  dataTwo,
  LabelTwo,
  borderColorTwo
) => {
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
        borderColor: borderColorArray[1],
        fill: false,

        // This binds the dataset to the right y axis
        yAxisID: "right-y-axis",
      },
    ],
    labels: [],
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

// scales

export { selectGraph };
