import React from 'react';
import { CardSimple } from './components/CardSimple'
import './App.css';
import { CardFunctional } from './components/CardFunctional';

const App = () => {
  return (
    <div className="App">
      <CardSimple title="Card Simple" />
      <CardFunctional title="Card Functional" />
    </div>
  );
}

export default App;
