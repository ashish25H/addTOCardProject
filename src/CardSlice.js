import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  card: [],
};

export const counterSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      let product = {
        id: nanoid(),
        image: action.payload[0],
        price: action.payload[1],
        name: action.payload[2],
      };
      state.card.push(product);
    },
  },
});

export const { addToCard } = counterSlice.actions;

export default counterSlice.reducer;
