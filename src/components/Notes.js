import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NotesList from "./NotesList";
import AddEditNote from "./AddEditNote";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px",
    border: "2px",
    backgroundColor: "#3f3f400a",
    minHeight: "100vh",
  },
}));
const Notes = () => {
  const { paper } = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={3}
        style={{ minHeight: "100vh", border: "1px  " }}
      >
        <Grid item xs={6} sm={3} style={{ paddingRight: "0" }}>
          <Paper className={paper}>
            <NotesList />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={9} style={{ paddingLeft: "0" }}>
          <Paper className={paper}>
            <AddEditNote />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Notes;
