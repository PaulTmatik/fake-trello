import React, { useState } from "react";
import EditableText from "./components/EditableText";
import Button from "./components/pure/Button";

function App() {
  const [editTextValue, setEditTextValue] = useState("block 1");
  return (
    <>
      <EditableText
        value={editTextValue}
        onChange={(e) => setEditTextValue(e.target.value)}
      />
      <Button icon="add">Добавить ещё одну колонку</Button>
    </>
  );
}

export default App;
