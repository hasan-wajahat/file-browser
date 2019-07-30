import { ADD_FOLDER, ADD_FILE } from './actionTypes';

export function directoryReducer(state, action) {
  switch (action.type) {
    case ADD_FOLDER:
      return [
        ...state,
        {
          type: 'folder',
          key: action.payload.key,
          path: action.payload.path,
          name: action.payload.name,
        },
      ];
    case ADD_FILE:
      return [
        ...state,
        {
          type: 'file',
          key: action.payload.key,
          path: action.payload.path,
          name: action.payload.name,
        },
      ];
    default: return state;
  }
}
