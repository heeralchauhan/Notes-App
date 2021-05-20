import {
  SET_ID,
  SET_TITLE,
  SET_CONTENT,
  RESET_FORM,
} from "../actions/FormAction";

const initialState = {
  id: -1,
  title: "",
  content: "",
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID: {
      const id = action.payload;
      return { ...state, id };
    }
    case SET_TITLE: {
      const title = action.payload;
      return { ...state, title };
    }
    case SET_CONTENT: {
      const content = action.payload;
      return { ...state, content };
    }
    case RESET_FORM: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default FormReducer;
