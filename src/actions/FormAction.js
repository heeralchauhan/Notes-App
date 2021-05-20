export const SET_ID = "SET_ID";
export const SET_TITLE = "SET_TITLE";
export const SET_CONTENT = "SET_CONTENT";
export const RESET_FORM = "RESET_FORM";

export const setId = (id) => {
  return {
    type: SET_ID,
    payload: id,
  };
};
export const setTitle = (title) => {
  return {
    type: SET_TITLE,
    payload: title,
  };
};
export const setContent = (content) => {
  return {
    type: SET_CONTENT,
    payload: content,
  };
};
export const resetForm = () => {
  return {
    type: RESET_FORM,
  };
};
