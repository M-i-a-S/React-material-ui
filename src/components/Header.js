import { AppBar, Grid, InputBase, makeStyles } from "@material-ui/core";
import { Badge, IconButton, Toolbar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfd8dc",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase />
          </Grid>
          <Grid item sm></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
