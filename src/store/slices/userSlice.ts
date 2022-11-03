import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "models/IUser";
import { RootState } from "store/store";

interface userState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: userState = {
  user: null,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => {
  return state.userReducer.user;
};
