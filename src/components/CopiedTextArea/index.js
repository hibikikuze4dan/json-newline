import { Button, Grid, TextField as MuiTextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewlineRemoverValue,
  getReplacement,
  removeNewLines,
  updateNewlineRemoverValue,
  updateRemoveCopy,
  updateReplacement,
} from "../../features/slice/slice";
import TextField from "./Textfield";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CopiedTextArea = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useDispatch();
  const value = useSelector(getNewlineRemoverValue);
  const replacementValue = useSelector(getReplacement);

  return (
    <Grid container spacing={4} justifyContent="space-around">
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <TextField />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <Button
                  onClick={() => {
                    navigator.clipboard
                      .readText()
                      .then((val) => dispatch(updateNewlineRemoverValue(val)))
                      .catch(() =>
                        dispatch(
                          updateNewlineRemoverValue(
                            "Sorry, a problem occured. Make sure you have the correct content copied to your clipboard"
                          )
                        )
                      );
                  }}
                  color="secondary"
                  fullWidth
                  size="large"
                  variant="outlined"
                >
                  Paste Clipboard Content
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => dispatch(removeNewLines())}
                  color="secondary"
                  fullWidth
                  size="large"
                  variant="outlined"
                >
                  Remove New Lines
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    navigator.clipboard
                      .writeText(value)
                      .catch(() =>
                        dispatch(
                          updateNewlineRemoverValue("Sorry, a problem occured.")
                        )
                      );
                  }}
                  color="secondary"
                  fullWidth
                  size="large"
                  variant="outlined"
                >
                  Copy Text to Clipboard
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  onClick={() => {
                    navigator.clipboard
                      .readText()
                      .then((val) => dispatch(updateRemoveCopy(val)))
                      .catch(() =>
                        dispatch(
                          updateNewlineRemoverValue(
                            "Sorry, a problem occured. Make sure you have the correct content copied to your clipboard"
                          )
                        )
                      );
                  }}
                  color="secondary"
                  fullWidth
                  size="large"
                  variant="outlined"
                  style={{ marginLeft: isLg ? "8px" : "0px" }}
                >
                  Paste & Remove & Copy
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <MuiTextField
                label="replace newlines with"
                id="newline-replacement"
                value={replacementValue}
                onChange={(e) => dispatch(updateReplacement(e.target.value))}
                style={{ marginLeft: isLg ? "16px" : "0px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CopiedTextArea;
