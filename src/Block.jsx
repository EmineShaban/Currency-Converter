import './App.css';
import React from 'react';

const defaultCurrencies = ["UAN", "EUR", "USD", "BGN"]

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
    <div className='from'>
        <ul className='currency'>
            {defaultCurrencies.map((cur) => (
                <li
                    className={currency == cur ? "check" : ""}
                    onClick={() => onChangeCurrency(cur)}
                    key={cur}>
                        {cur}
                </li>
            ))}


        </ul>
        <form>
            <input
                onChange={(e) => onChangeValue(e.target.value)}
                value={value}
                placeholder='0'
                type='number' />
        </form>
    </div>


);