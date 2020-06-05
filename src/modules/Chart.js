import { newData } from "./onLoadData";

const ctx = document.getElementById("lineChart");
const lineChart = new Chart(ctx, {
  type: "line",
  data: newData,
  options: {
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
  },
});

export { lineChart };
