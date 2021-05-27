import { useState } from 'react';
import { List } from "./List";

function App() {
  const [description, setDescription] = useState('View before Click');

  const changeDescription = () => {
    setDescription('view after click');
  }

  return (
    <div>
      { description }
      <List title="Can you see me?"/>
      <button onClick={() => changeDescription() }> button </button>
    </div>
  );
}

export default App;
