import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CRUD } from "../../models/crud.model";
import _ from "lodash";

export interface CrudState {
  cruds: CRUD[];
}

let initialState: CrudState = {
  cruds: [
    {
      id: String(Date.now()),
      firstName: "Ibrahim",
      lastName: "Nour",
      email: "ebrahimnour186@gmail.com",
      phone: "01207443535",
      descritpion: "this is second item",
    },
  ],
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addCrud(
      state,
      action: PayloadAction<{
        crud: CRUD;
      }>
    ) {
      state.cruds.push({ ...action.payload.crud, id: String(Date.now()) });
    },

    deleteCrud(state, action: PayloadAction<{ id: string }>) {
      state.cruds = state.cruds.filter((crud) => crud.id !== action.payload.id);
    },
    editCrud(state, action: PayloadAction<{ crud: CRUD }>) {
      state.cruds = state.cruds.map((crudItem) =>
        crudItem.id === action.payload.crud.id ? action.payload.crud : crudItem
      );
    },
    sortCruds(
      state,
      action: PayloadAction<{
        typeSort: "firstName" | "lastName";
      }>
    ) {
      state.cruds = _.sortBy(
        state.cruds,
        (crudItem) => crudItem[action.payload.typeSort]
      );
    },
    filtter(state, action: PayloadAction<{ searchText: string }>) {
      state.cruds = state.cruds.filter(
        (crud) => crud.firstName === action.payload.searchText
      );
    },
    getListCruds(state) {
      state.cruds = initialState.cruds;
    },
  },
});

export const {
  addCrud,
  deleteCrud,
  sortCruds,
  editCrud,
  filtter,
  getListCruds,
} = crudSlice.actions;

export const selectCruds = (state: RootState) => state.list.cruds;

export default crudSlice.reducer;
