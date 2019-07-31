import { ADD_FOLDER, ADD_FILE, DELETE_ITEM } from './actionTypes';

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
    case DELETE_ITEM: {
      const { payload: { item } } = action;
      return state.filter(iterator => (
        iterator.key !== item.key
        && !iterator.path.includes(`${item.path}/${item.key}`) // removes sub folder and files
      ));
    }
    default: return state;
  }
}
