import { createStore } from "redux";
import NotesReducer from "./reducers/NotesReducer";
import { combineReducers } from "redux";
import FormReducer from "./reducers/FormReducer";

const rootReducer = combineReducers({
  notes: NotesReducer,
  formData: FormReducer,
});

const store = createStore(rootReducer);
export default store;
