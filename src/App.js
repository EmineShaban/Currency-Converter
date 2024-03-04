import './App.css';
import React from 'react';

function App() {
  const [info, setInfo] = React.useState({});
  const [fromCurrency, setFromCurrency] = React.useState("UAN");
  const [toCurrency, setToCurrency] = React.useState("EUR");
  
  const defaultCurrencies = ["UAN", "EUR", "USD", "BGN"]
  React.useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setInfo(json)
      }).catch(err => {
        console.warn(err)
        alert("error")
      })
    // .finally(() => setLoading(false))
  }, []);


  return (
    <div className="App">
      <div className='from'>
        <ul className='currency'>
          {defaultCurrencies.map((cur) => (
            <li
              className={fromCurrency == cur ? "check" : ""}
              // onClick={() => onChangeCurrency(cur)}
              key={cur}>{cur}</li>
          ))}


        </ul>
        <form>
          <input type='number' />
        </form>
      </div>
      <div className='from'>
        <ul className='currency'>
          {defaultCurrencies.map((cur) => (
            <li
              className={toCurrency == cur ? "check" : ""}

              onClick={() => onChangeCurrency(cur)}
              key={cur}>{cur}</li>
          ))}


        </ul>
        <form>
          <input type='number' />
        </form>
      </div>

    </div>
  );
}

export default App;
