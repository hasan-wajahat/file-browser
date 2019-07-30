import {
  ADD_FOLDER,
  DELETE_FOLDER,
  EDIT_FOLDER,
  ADD_FILE,
  EDIT_FILE,
  DELETE_FILE,
} from './actionTypes';

export const addFolder = payload => ({
  type: ADD_FOLDER,
  payload,
});

export const deleteFolder = payload => ({
  type: DELETE_FOLDER,
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

export const deleteFile = payload => ({
  type: DELETE_FILE,
  payload,
});
