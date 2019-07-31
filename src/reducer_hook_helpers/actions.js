import {
  ADD_FOLDER,
  DELETE_ITEM,
  EDIT_ITEM,
  ADD_FILE,
} from './actionTypes';

export const addFolder = payload => ({
  type: ADD_FOLDER,
  payload,
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});

export const editItem = payload => ({
  type: EDIT_ITEM,
  payload,
});

export const addFile = payload => ({
  type: ADD_FILE,
  payload,
});
