import { useEffect, useState } from "react";

function App() {
  const url = "https://api.coinpaprika.com/v1/tickers";
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(result => result.json())
      .then(data => {
        setCoin(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">

      <div>
        <h1>The Coins {loading ? "" : `(${coin.length})`}</h1>
        {loading ? <strong>Loading</strong> :
          <ul>
            {coin.map((coin) => {
              return (
                <li key={coin.id}>{coin.name} {coin.symbol} : $ {coin.quotes.USD.price}</li>
              )
            })}
          </ul>
        }

      </div>

    </div>
  );
}

export default App;
