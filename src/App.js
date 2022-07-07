import { Typography } from "@mui/material";
import React from "react";
import "./App.css";
import CopiedTextArea from "./components/CopiedTextArea";

function App() {
  return (
    <div className="App">
      <Typography variant="h4">Newline Replacer</Typography>
      <CopiedTextArea />
    </div>
  );
}

export default App;
