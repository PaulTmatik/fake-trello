const ADD_COLUMN = "trello-clone/dashboard/ADD_COLUMN";
const EDIT_COLUMN_NAME = "trello-clone/dashboard/EDIT_COLUMN_NAME";
const ADD_CARD = "trello-clont/dashboard/ADD_CARD";

export const addColumnAction = (columnName) => ({
  type: ADD_COLUMN,
  columnName,
});

export const editColumnNameAction = (columnId, newName) => ({
  type: EDIT_COLUMN_NAME,
  columnId,
  newName,
});

export const addCardAction = (columnId, cardName) => ({
  type: ADD_CARD,
  columnId,
  cardName,
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
        columns: [
          ...state.columns,
          {
            id: idCounter,
            name: action.columnName,
            cards: { cardsIdCounter: 0, values: [] },
          },
        ],
        idCounter,
      };

    case ADD_CARD:
      const columnIndex = state.columns.findIndex(
        (element) => element.id === action.columnId
      );
      const columns = [...state.columns];
      const cards = { ...columns[columnIndex].cards };
      const cardsIdCounter = cards.cardsIdCounter + 1;
      columns[columnIndex] = {
        ...columns[columnIndex],
        cards: {
          ...cards,
          cardsIdCounter,
          values: [
            ...cards.values,
            { id: cardsIdCounter, name: action.cardName },
          ],
        },
      };
      return {
        ...state,
        columns,
      };
      
    default:
      return state;
  }
};
