import {
  ADD_FOLDER,
  ADD_FILE,
  DELETE_ITEM,
  EDIT_ITEM,
} from './actionTypes';

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
      const { payload } = action;
      return state.filter(item => (
        item.key !== payload.key
        && !item.path.includes(`${payload.path}/${payload.key}`) // removes sub folder and files
      ));
    }
    case EDIT_ITEM:
      return state.map((item) => {
        if (item.key === action.payload.key) {
          return {
            ...item,
            name: action.payload.name,
          };
        }
        return item;
      });
    default: return state;
  }
}
