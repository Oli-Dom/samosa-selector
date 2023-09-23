import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [price, setPrice] = useState([10, 100, 1000]);

  const updateCount = () => {
    setCount(count + 1 * multiplier);
  };

  const buyDoubleStuffed = () => {
    if (count >= price[0]) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
      setPrice([price[0] * 2, price[1], price[2]]);
    }
  };

  const buyPartyPack = () => {
    if (count >= price[1]) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
      setPrice([price[0], price[1] * 4, price[2]]);
    }
  };

  const buyFullFeast = () => {
    if (count >= price[2]) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
      setPrice([price[0], price[1], price[2] * 6]);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="https://www.cookingcarnival.com/wp-content/uploads/2021/10/Chinese-samosa-8.jpg"
          onClick={updateCount}
        ></img>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>{price[0]} samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>{price[1]} samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>{price[2]} samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;
