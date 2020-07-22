import React from "react";
import AddForm from "./components/AddForm";

function App() {
  return (
    <>
      <AddForm addType="column" onSubmit={e => console.log(e)} />
    </>
  );
}

export default App;
