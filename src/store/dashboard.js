const ADD_COLUMN = "trello-clone/dashboard/ADD_COLUMN";
const EDIT_COLUMN_NAME = "trello-clone/dashboard/EDIT_COLUMN_NAME";
const ADD_CARD = "trello-clont/dashboard/ADD_CARD";
const EDIT_CARD_NAME = "trello-clone/dashboard/EDIT_CARD_NAME";

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

export const editCardNameAction = (columnId, cardId, newName) => ({
  type: EDIT_CARD_NAME,
  columnId,
  cardId,
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

    // Дублирование кода, нужен рефакторинг
    case ADD_CARD:
      const acColumnIndex = state.columns.findIndex(
        (element) => element.id === action.columnId
      );
      const acColumns = [...state.columns];
      const acCards = { ...acColumns[acColumnIndex].cards };
      const cardsIdCounter = acCards.cardsIdCounter + 1;
      acColumns[acColumnIndex] = {
        ...acColumns[acColumnIndex],
        cards: {
          ...acCards,
          cardsIdCounter,
          values: [
            ...acCards.values,
            { id: cardsIdCounter, name: action.cardName },
          ],
        },
      };
      return {
        ...state,
        columns: acColumns,
      };
      
    // Дублирование кода, нужен рефакторинг
    case EDIT_CARD_NAME:
      const ecColumnIndex = state.columns.findIndex(
        (element) => element.id === action.columnId
      );
      const columns = [...state.columns];
      const cards = { ...columns[ecColumnIndex].cards };
      const cardIndex = cards.values.findIndex(
        (element) => element.id === action.cardId
      );
      const values = [...cards.values];
      values[cardIndex] = { ...values[cardIndex], name: action.newName };
      columns[ecColumnIndex] = {
        ...columns[ecColumnIndex],
        cards: {
          ...cards,
          values,
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
