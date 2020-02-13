import React, { useContext } from 'react';
import { CardSimple } from './components/CardSimple'
import './App.css';
import { CardFunctional } from './components/CardFunctional';
import { Counter } from './components/CounterHooks';

export const LanguageContext = React.createContext({ lang: 'en' })

const App = () => {
  return (
    <div className="App">
      {/* <CardSimple title="Card Simple" />
      <CardFunctional title="Card Functional" />
      <Clock />
      <Article title="TS" price={10} /> */}

      <Counter />
    </div>
  );
}

export default App;
