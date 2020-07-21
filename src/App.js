import React, { useState } from "react";
import EditableText from "./components/pure/EditableText";

function App() {
  const [editTextValue, setEditTextValue] = useState("block 1");
  return (
    <EditableText
      value={editTextValue}
      onChange={(e) => setEditTextValue(e.target.value)}
    />
  );
}

export default App;
