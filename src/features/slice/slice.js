import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  newlineRemoverValue: "",
  replacement: "",
};

const removeNewLinesFunc = (state) => {
  const reg = /(\r\n|\r|\n)/gi;
  state.newlineRemoverValue = state.newlineRemoverValue.replaceAll(
    reg,
    state.replacement
  );
  return state;
};

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    updateNewlineRemoverValue: (state, { payload }) => {
      state.newlineRemoverValue = payload;
    },
    removeNewLines: removeNewLinesFunc,
    updateReplacement: (state, { payload }) => {
      state.replacement = payload;
    },
    updateRemoveCopy: (state, { payload }) => {
      state.newlineRemoverValue = payload;
      state = { ...removeNewLinesFunc(state) };
      navigator.clipboard
        .writeText(state.newlineRemoverValue)
        .catch(
          () =>
            (state.newlineRemoverValue = updateNewlineRemoverValue(
              "Sorry, a problem occured."
            ))
        );
    },
  },
});

export const {
  updateNewlineRemoverValue,
  removeNewLines,
  updateReplacement,
  updateRemoveCopy,
} = slice.actions;

export const getNewlineRemoverValue = (state) => state.newlineRemoverValue;

export const getReplacement = (state) => state.replacement;

export default slice.reducer;
