export const getCards = (columnId, state) => {
  const columnIndex = state.columns.findIndex(
    (element) => element.id === columnId
  );
  const columns = [...state.columns];
  return { ...columns[columnIndex].cards };
}