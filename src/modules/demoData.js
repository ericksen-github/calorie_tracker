import { allData } from "./localStorage";
import { EntryFactory } from "./entryObject";
import { tableFunctions } from "./tableFunctions";
import { clearData } from "./clearData";

// dummy data used for demoing project
const demoArray = [
  ["2020-07-01", [182.2, 3254, 213, 198]],
  ["2020-07-02", [183.2, 3412, 412, 156]],
  ["2020-07-03", [183, 3446, 460, 185]],
  ["2020-07-04", [182.4, 2998, 621, 183]],
  ["2020-07-05", [182.8, 3321, 415, 201]],
  ["2020-07-06", [183.4, 3250, 587, 210]],
  ["2020-07-07", [182.8, 3188, 355, 197]],
  ["2020-07-08", [183.2, 3095, 301, 175]],
  ["2020-07-09", [183.2, 3265, 150, 190]],
  ["2020-07-10", [183.8, 3247, 187, 213]],
  ["2020-07-11", [183.6, 3513, 458, 180]],
  ["2020-07-12", [184.4, 3161, 230, 201]],
  ["2020-07-13", [185, 3320, 540, 192]],
  ["2020-07-14", [184.8, 3401, 0, 215]],
  ["2020-07-15", [185.2, 3546, 212, 190]],
];

const showDemoArray = () => {
  clearData(); // starts by clearing out existing data

  // then pushes demoArray to allData
  for (let i = 0; i < demoArray.length; i++) {
    const date = demoArray[i][0];
    const tempArray = demoArray[i][1];

    const newEntry = EntryFactory(date, tempArray);
    allData.push(newEntry);
    tableFunctions.render(); // updates table/graph
  }
};

export { showDemoArray };
