import { tableFunctions } from "./tableFunctions";
import { lineChart } from "./Chart";

let allData = [];

const localStorageFunctions = (() => {
  const storageAvailable = (type) => {
    // checks to see if browswer offers support for local storage
    var storage;
    try {
      storage = window[type];
      var x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  };

  const populateStorage = () => {
    if (
      !localStorage.getItem("savedData") ||
      localStorage.getItem("savedData").length == 2
    ) {
      // initializes linechart on page if no local data exists
      lineChart;
    } else {
      const loadedArray = JSON.parse(localStorage.getItem("savedData"));
      loadExistingStorage(loadedArray);
    }
  };

  const loadExistingStorage = (loadedArray) => {
    for (let i = 0; i < loadedArray.length; i++) {
      allData.push(loadedArray[i]);
    }
    tableFunctions.render();
  };

  const saveNewData = () => {
    localStorage.setItem("savedData", JSON.stringify(allData));
  };

  return {
    storageAvailable,
    populateStorage,
    saveNewData,
  };
})();

export { localStorageFunctions, allData };
