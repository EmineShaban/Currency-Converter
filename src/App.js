import React from 'react';
import { Block } from './Block';

function App() {
  const [info, setInfo] = React.useState({});
  // const [currency, setCurrency] = React.useState("UAN");

  const [fromCurrency, setFromCurrency] = React.useState("UAN");
  const [toCurrency, setToCurrency] = React.useState("EUR");
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);
  const cur = []

  React.useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setInfo(json)
        json.map((e) => {
          // const obj ={[e.cc] : [e.rate]}

          // cur.push(obj) 
          cur.push (Object.keys(e.cc))
        })
      }).catch(err => {
        console.warn(err)
        alert("error")
      })
    // .finally(() => setLoading(false))
  }, []);

 console.log(cur)

  const onChangeFromCurrency = (value) => {
    setFromCurrency(value)
  }
  const onChangeToCurrency = (value) => {
    setToCurrency(value)
  }


  const onChangeFromValue = (value) => {
    setFromPrice(value)

    // console.log(value)
    info.map((e) => {
      // console.log(e.cc)

      if (e.cc == fromCurrency) {
        const result = (e.rate * value) 
        console.log(e.cc)
        console.log(result)
        console.log(toCurrency)

        setToPrice(result)

      } else if (fromCurrency == "UAN") {
        const result = value / e.rate;
        console.log(e.rate)

        // console.log(result)
        setToPrice(result)

      }
    }

    )
    // const result = value * info.rate
  }
  const onChangeToValue = (value) => {
    setToPrice(value)
  }

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency}
        onChangeCurrency={onChangeFromCurrency}
        onChangeValue={onChangeFromValue} />

      <Block value={toPrice} currency={toCurrency}
        onChangeCurrency={onChangeToCurrency}
        onChangeValue={onChangeToValue} />

    </div>
  );
}

export default App;
