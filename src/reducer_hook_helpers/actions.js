import {
  ADD_FOLDER,
  DELETE_ITEM,
  EDIT_FOLDER,
  ADD_FILE,
  EDIT_FILE,
} from './actionTypes';

export const addFolder = payload => ({
  type: ADD_FOLDER,
  payload,
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});

export const editFolder = payload => ({
  type: EDIT_FOLDER,
  payload,
});

export const addFile = payload => ({
  type: ADD_FILE,
  payload,
});

export const editFile = payload => ({
  type: EDIT_FILE,
  payload,
});
