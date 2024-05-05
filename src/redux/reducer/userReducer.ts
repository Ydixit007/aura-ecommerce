import { User } from "@/types/api-types";
import { userReducerInitialState } from "@/types/reducer-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: userReducerInitialState = { user: null, loading: true };

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.loading = true;
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userReducer.actions;
