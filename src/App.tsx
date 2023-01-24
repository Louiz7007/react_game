import React from 'react';
import './App.css';
import {Title} from "./components/Title";
import {Button} from "./components/Button";

function App() {
  return (
    <div className="App">
      <Title text={'Willkommen'}/>
        <Button text={'Start'}/>
    </div>
  );
}

export default App;
