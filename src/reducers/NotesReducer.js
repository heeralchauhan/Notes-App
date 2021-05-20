import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../actions/NotesAction";

const initialState = {
  notes: [],
};

const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      const notes = [...state.notes];
      notes.push(action.payload);
      return { notes };
    }
    case UPDATE_NOTE: {
      console.log("update note", action.payload);
      const { note } = action.payload;
      const notes = state.notes.map((n) =>
        n.id === note.id ? { ...note } : n
      );
      return { notes };
    }
    case DELETE_NOTE: {
      const idToDelete = action.payload;
      const notes = state.notes.filter((value) => value.id != idToDelete);
      return { notes };
    }
    default:
      return state;
  }
};

export default NotesReducer;
