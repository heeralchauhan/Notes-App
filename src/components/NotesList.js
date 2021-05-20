import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Note from "./Note";
import { List, ListItem, Divider } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { setId, setTitle, setContent, resetForm } from "../actions/FormAction";
import notesAction from "../actions/NotesAction";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const { deleteNote } = notesAction;

  const dispatch = useDispatch();

  const onItemClick = (note) => {
    dispatch(setId(note.id));
    dispatch(setTitle(note.title));
    dispatch(setContent(note.content));
  };

  const onDeleteItemClick = (e, id) => {
    e.preventDefault();
    if (id) {
      dispatch(deleteNote(id));
      dispatch(resetForm());
    }
  };

  return (
    <div>
      <List>
        {notes.length === 0 ? (
          <ListItem>
            <Note note={{ title: "No note added.", content: "" }} />
          </ListItem>
        ) : (
          notes.map((note, index) => {
            if (note) {
              return (
                <Fragment key={index}>
                  <ListItem
                    button
                    key={index}
                    onClick={() => {
                      onItemClick(note);
                    }}
                  >
                    <Note note={note} />
                    <CloseIcon
                      onClick={(e) => {
                        onDeleteItemClick(e, note.id);
                      }}
                    />
                  </ListItem>
                  <Divider />
                </Fragment>
              );
            }
            return null;
          })
        )}
      </List>
    </div>
  );
};

export default NotesList;
