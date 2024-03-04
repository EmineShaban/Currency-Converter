import React from 'react';
import { Block } from './Block';

function App() {
  const [info, setInfo] = React.useState({});
  // const [currency, setCurrency] = React.useState("UAN");

  const [fromCurrency, setFromCurrency] = React.useState("UAN");
  const [toCurrency, setToCurrency] = React.useState("EUR");

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

  const onChangeFromCurrency = (value) => {
    setFromCurrency(value)
  }
  const onChangeToCurrency = (value) => {
    setToCurrency(value)
  }
  

  const onChangeFromValue = (value) => {
    console.log(value)
    
  }
  return (
    <div className="App">
      <Block value={0} currency={fromCurrency} onChangeCurrency={onChangeFromCurrency} onChangeValue={onChangeFromValue} />

      <Block value={0} currency={toCurrency} onChangeCurrency={onChangeToCurrency} />

    </div>
  );
}

export default App;
