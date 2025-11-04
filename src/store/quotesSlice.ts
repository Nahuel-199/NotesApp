import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Quote {
  id: string;
  text: string;
  createdAt: number;
}

export interface QuotesState {
  items: Quote[];
  filter: string;
}

const initialState: QuotesState = {
  items: [],
  filter: "",
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote: (state, action: PayloadAction<string>) => {
      const newQuote: Quote = {
        id: crypto.randomUUID(),
        text: action.payload,
        createdAt: Date.now(),
      };
      state.items.unshift(newQuote);
      localStorage.setItem("frases:quotes", JSON.stringify(state.items));
    },
    removeQuote: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((q) => q.id !== action.payload);
      localStorage.setItem("frases:quotes", JSON.stringify(state.items));
    },
    editQuote: (state, action: PayloadAction<{ id: string; newText: string }>) => {
      const quote = state.items.find((q) => q.id === action.payload.id);
      if (quote) {
        quote.text = action.payload.newText;
        localStorage.setItem("frases:quotes", JSON.stringify(state.items));
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    loadFromStorage: (state) => {
      try {
        const saved = localStorage.getItem("frases:quotes");
        if (saved) state.items = JSON.parse(saved);
      } catch {
        /* noop */
      }
    },
  },
});

export const { addQuote, removeQuote, setFilter, loadFromStorage, editQuote  } = quotesSlice.actions;
export default quotesSlice.reducer;