import { localStorageFunctions } from "./modules/localStorage";
import { createInitialListeners } from "./modules/createInitialListeners";

if (localStorageFunctions.storageAvailable("localStorage")) {
  localStorageFunctions.populateStorage();
}

createInitialListeners();
