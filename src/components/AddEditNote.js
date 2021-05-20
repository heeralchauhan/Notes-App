import React from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setContent, resetForm } from "../actions/FormAction";
import notesAction from "../actions/NotesAction";

import Button from "@material-ui/core/Button";
import "./AddEditNote.scss";

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
  },
  deleteButton: {
    marginLeft: "10px",
  },
  buttonsPanel: {
    marginTop: "10px",
  },
}));
const AddEditNote = () => {
  const { addNote, deleteNote, updateNote } = notesAction;
  const { textField, deleteButton, buttonsPanel } = useStyles();
  const id = useSelector((state) => state.formData.id);
  const title = useSelector((state) => state.formData.title);
  const content = useSelector((state) => state.formData.content);

  const dispatch = useDispatch();

  console.log(id, title, content);
  return (
    <div className="demo">
      <form className="add-form">
        <div id="AddInputSection">
          {/* <TextField style={{ display: "none" }} value={id} /> */}
          <h3> Title </h3>
          <TextField
            className={textField}
            id="outlined-basic"
            value={title || ""}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            variant="outlined"
          />
          <h3> Content </h3>
          <TextareaAutosize
            className={textField}
            id="outlined-basic"
            value={content || ""}
            onChange={(e) => dispatch(setContent(e.target.value))}
            variant="outlined"
            rowsMin={16}
          />
        </div>
        <div className={buttonsPanel}>
          {id > 1 && (
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                if (id) {
                  const note = { id, title, content };
                  dispatch(updateNote(note));
                  dispatch(resetForm());
                }
              }}
            >
              Update
            </Button>
          )}
          {!(id > 1) && (
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                if (title && content) {
                  const newId = Math.floor(Math.random() * 1000 + 1);
                  const note = { id: newId, title, content };
                  dispatch(addNote(note));
                  dispatch(resetForm());
                } else alert("Please enter Title and Content");
              }}
            >
              Add
            </Button>
          )}

          {id > 1 && (
            <Button
              variant="contained"
              className={deleteButton}
              onClick={(e) => {
                e.preventDefault();
                if (id) {
                  dispatch(deleteNote(id));
                  dispatch(resetForm());
                }
              }}
            >
              Delete
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddEditNote;
