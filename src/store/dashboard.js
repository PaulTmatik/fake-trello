const ADD_COLUMN = "trello-clone/dashboard/ADD_COLUMN";

export const addColumnAction = (columnName) => ({
  type: ADD_COLUMN,
  columnName,
});

export const dashboardReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, { name: action.columnName, children: [] }];
    default:
      return state;
  }
};
