import handleCart from "./handleCart"; // Make sure the name matches the file
import { combineReducers } from "redux";

// Combine your reducers correctly
const rootReducers = combineReducers({
  handleCart, // Changed from handleCaret to handleCart
});

export default rootReducers;
