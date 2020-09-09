import { allData, localStorageFunctions } from "./localStorage";
import { graphSelector } from "./graphSelector";

const clearData = () => {
  while (allData.length > 0) {
    allData.pop();
  }

  const table = document.getElementById("table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  graphSelector.selectGraph(); // updates graph
  localStorageFunctions.saveNewData();
};

export { clearData };
