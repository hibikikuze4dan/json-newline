import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewlineRemoverValue,
  updateNewlineRemoverValue,
} from "../../features/slice/slice";

const TextField = () => {
  const value = useSelector(getNewlineRemoverValue);
  const dispatch = useDispatch();

  return (
    <MuiTextField
      id="copied-text"
      label="Newline Replacer"
      rows={10}
      multiline
      fullWidth
      onChange={(e) => dispatch(updateNewlineRemoverValue(e.target.value))}
      autoComplete="on"
      autoCorrect="on"
      placeholder="Enter text here"
      value={value}
    />
  );
};

export default TextField;
