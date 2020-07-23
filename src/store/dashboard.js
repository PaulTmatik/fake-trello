const ADD_COLUMN = "trello-clone/dashboard/ADD_COLUMN";
const EDIT_COLUMN_NAME = "trello-clone/dashboard/EDIT_COLUMN_NAME";

export const addColumnAction = (columnName) => ({
  type: ADD_COLUMN,
  columnName,
});

export const editColumnName = (columnId, newName) => ({
  type: EDIT_COLUMN_NAME,
  columnId,
  newName,
});

export const dashboardReducer = (
  state = { idCounter: 0, columns: [] },
  action
) => {
  switch (action.type) {
    case EDIT_COLUMN_NAME:
      if (action.newName !== "") {
        const columnIndex = state.columns.findIndex(
          (element) => element.id === action.columnId
        );
        const columns = [...state.columns];
        columns[columnIndex] = {
          ...columns[columnIndex],
          name: action.newName,
        };
        return { ...state, columns };
      }
      return { ...state };
    case ADD_COLUMN:
      const idCounter = state.idCounter + 1;
      return {
        ...state,
        columns: [...state.columns, { id: idCounter, name: action.columnName }],
        idCounter,
      };
    default:
      return state;
  }
};
