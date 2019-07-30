export function directoryReducer(state, action) {
  switch (action.type) {
    case 'add_folder':
      return [
        ...state,
        {
          type: 'folder',
          key: action.payload.key,
          path: action.payload.path,
          name: action.payload.name,
        },
      ];
    default: return state;
  }
}
