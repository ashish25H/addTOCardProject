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

      if (state.card.length === 0) {
        state.card.push(product);
      } else {
        let res = state.card.some((card) => {
          return card.name === product.name && card.image === product.image && card.price === product.price;
        });
        console.log(res);
        if (res) {
          console.log(`Present`);
        } else {
          state.card.push(product);
        }
      }

      // if (
      //   state.card.map((card) => {
      //     if (
      //       card.name === product.name &&
      //       card.price === product.price &&
      //       card.image === product.image
      //     ) {
      //       return false;
      //     } else {
      //       return true;
      //     }
      //   })
      // ) {
      //   console.log(`All ready Present`);
      // } else {
      //   state.card.push(product);
      // }
      // state.card.push(product);
    },
    removeFromCard: (state, action) => {
      state.card = state.card.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addToCard, removeFromCard } = counterSlice.actions;

export default counterSlice.reducer;
