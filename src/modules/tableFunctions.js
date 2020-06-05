// entry object - date, weight, calorie, exercise, protein
import { allData } from "./dataset";

const tableFunctions = (() => {
  const render = (allData) => {
    let entryHTML = "";

    for (let entry of allData) {
      entryHTML += `<tr><td>${entry.date}</td>
                         <td>${entry.weight}</td>
                         <td>${entry.calorie}</td>
                         <td>${entry.exercise}</td>
                         <td>${entry.protein}</td>
                         <td class = "editOuter><div class = "editButton">Edit</div></td>
                         <td class = "removeOuter"><div class = "removeButton">X</div></td>
                     </tr>
                    `;
    }

    document.querySelector("tbody").innerHTML = entryHTML;

    createRemoveListeners();
  };

  const createRemoveListeners = () => {
    document.querySelectorAll(".removeButton").forEach((button) => {
      button.addEventListener("click", () => {
        removeEntry(button.parentElement.parentElement); // passes same row as remove button
      });
    });

    const removeEntry = (selectedRow) => {
      const entryDate = selectedRow.children[0].innerHTML;
      const table = selectedRow.parentElement.parentElement;
      table.deleteRow(selectedRow.rowIndex); // removes row from table

      for (let j = 0; j < allData.length; j++) {
        if (allData[j].date == entryDate) {
          allData.splice(j, 1); // and splices out entry
        }
      }
      //  localStorageFunctions.saveNewData();
      console.log(allData);
    };
  };

  return {
    render,
  };
})();

export { tableFunctions };
