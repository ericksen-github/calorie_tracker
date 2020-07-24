// entry object - date, weight, calorie, exercise, protein
import { allData } from "./dataset";
import { graphSelector } from "./graphSelector";

const tableFunctions = (() => {
  let sortTracker = "newest"; // used to track what direction to sort dates by
  const sortTable = () => {
    if (sortTracker == "newest") {
      allData.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
      });
    } else {
      allData.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
      });
    }
  };

  const checkTracker = () => {
    if (sortTracker == "newest") {
      sortTracker = "oldest";
    } else {
      sortTracker = "newest";
    }
    sortTable();
  };

  const render = () => {
    let entryHTML = "";

    for (let entry of allData) {
      if (areAllNull(entry)) {
        continue;
      }

      let w, c, e, p;
      [w, c, e, p] = nullSwapper(entry, w, c, e, p);

      entryHTML += `<tr><td>${entry.date}</td>
                         <td>${w}</td>
                         <td>${c}</td>
                         <td>${e}</td>
                         <td>${p}</td>
                         <td class = "editOuter"><div class = "editButton">Edit</div></td>
                         <td class = "removeOuter"><div class = "removeButton">X</div></td>
                     </tr>
                    `;
    }
    document.querySelector("tbody").innerHTML = entryHTML;
    createRemoveListeners();
    graphSelector.selectGraph();
  };

  // if non-date entries are all null, does not add to table
  const areAllNull = (entry) => {
    if (
      entry.weight == null &&
      entry.calorie == null &&
      entry.exercise == null &&
      entry.protein == null
    ) {
      return true;
    }
  };

  // places empty string if value null, otherwise places entry value for table
  const nullSwapper = (entry, w, c, e, p) => {
    if (entry.weight == null) {
      w = "";
    } else {
      w = entry.weight;
    }

    if (entry.calorie == null) {
      c = "";
    } else {
      c = entry.calorie;
    }

    if (entry.exercise == null) {
      e = "";
    } else {
      e = entry.exercise;
    }

    if (entry.protein == null) {
      p = "";
    } else {
      p = entry.protein;
    }

    return [w, c, e, p];
  };

  const createRemoveListeners = () => {
    document.querySelectorAll(".removeButton").forEach((button) => {
      button.addEventListener("click", () => {
        removeEntry(button.parentElement.parentElement); // passes same row as remove button
      });
    });
  };

  const removeEntry = (selectedRow) => {
    const entryDate = selectedRow.children[0].innerHTML;
    const table = selectedRow.parentElement.parentElement;
    table.deleteRow(selectedRow.rowIndex); // removes row from table
    removeEmptyEntries(entryDate); // removes entry from allData
    graphSelector.selectGraph(); // updates graph
    //  localStorageFunctions.saveNewData();
  };

  const removeEmptyEntries = (entryDate) => {
    if (entryDate == allData[0].date) {
      allData.shift(); // removes first index of array

      // checks if new first index is empty and removes until user entry is found
      while (
        allData[0] && // in case user deletes all entries
        allData[0].weight == null &&
        allData[0].calorie == null &&
        allData[0].exercise == null &&
        allData[0].protein == null
      ) {
        allData.shift();
      }
    } else if (entryDate == allData[allData.length - 1].date) {
      allData.pop(); // removes last index of array

      // checks if new last index is empty and removes until a user entry is found
      while (
        allData[allData.length - 1].weight == null &&
        allData[allData.length - 1].calorie == null &&
        allData[allData.length - 1].exercise == null &&
        allData[allData.length - 1].protein == null
      ) {
        allData.pop();
      }
    } else {
      // if entry is not first/last, finds entry in allData
      // and clears data leaving date as a blank for the graph
      for (let j = 0; j < allData.length; j++) {
        if (allData[j].date == entryDate) {
          allData[j].weight = null;
          allData[j].calorie = null;
          allData[j].exercise = null;
          allData[j].protein = null;
        }
      }
    }
  };

  return {
    sortTable,
    checkTracker,
    render,
  };
})();

export { tableFunctions };
