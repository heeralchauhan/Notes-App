import React from "react";
import { ListItemText } from "@material-ui/core";

const Note = ({ note }) => {
  return (
    <>
      <ListItemText primary={note.title} secondary={note.content} />
    </>
  );
};
export default Note;
