import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

import Employees from "../pages/Employees/Employees";

import "./App.css";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "200px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
