import { onLoadData, onLoadOptions } from "./onLoadData";

const ctx = document.getElementById("lineChart");
const lineChart = new Chart(ctx, {
  type: "line",
  data: onLoadData,
  options: onLoadOptions,
});

export { lineChart };
