import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import {blue } from "@material-ui/core/colors";

function algoProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor:blue,
  },
}));

export function NavBar() {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:"teal"
        }}
      >
       <br/> <h3 style={{backgroundColor:"rosybrown"}}>Sorting Visualizer</h3><br/>
      </div>
      <AppBar style={{backgroundColor:"plum" ,alignItems:"center"}}  position="static" color="blue">
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="secondary"
          textColor="black"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          backgroundColor="secondary"
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}
              {...algoProps(0)}
              key={algorithm.title}
            />
          ))}
          
        </Tabs>
      </AppBar>
    </div>
  );
}
