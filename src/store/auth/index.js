import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "alperenkolat",
    fullName: "Alperen kolat",
    avatar:
      "https://pbs.twimg.com/profile_images/1704584830480961536/Lsd4Dt3K_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "alperenkolat",
      fullName: "Alperen kolat",
      avatar:
        "https://pbs.twimg.com/profile_images/1704584830480961536/Lsd4Dt3K_400x400.jpg",
    },
    {
      id: 2,
      username: "Bad Machine",
      fullName: "badAdasa24",
      avatar:
        "https://pbs.twimg.com/profile_images/1703442337869832192/JbE9g4KK_400x400.png",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
