import { allData, localStorageFunctions } from "./localStorage";
import { graphSelector } from "./graphSelector";

const clearData = () => {
  // removes all entries from allData
  while (allData.length > 0) {
    allData.pop();
  }

  // removes rows from table until empty
  const table = document.getElementById("table");
  while (table.rows.length > 1) {
    // skips index 0 because it is the table headers
    table.deleteRow(1);
  }

  graphSelector.selectGraph(); // updates graph
  localStorageFunctions.saveNewData(); // saves the now empty array locally
};

export { clearData };
