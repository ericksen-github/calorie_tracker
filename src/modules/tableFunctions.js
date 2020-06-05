// entry object - date, weight, calorie, exercise, protein

function render(allData) {
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
}

export { render };
