import React from 'react';
import CurrencySlyder from './components/CurrencySlider';
import { ICurrencySlide } from './components/CurrencySlider/types';

const slides: Array<ICurrencySlide> = [
  {
    currencyIcon: 'fla1',
    currencyName: 'pepe',
    currencyType: 'SGD',
    amount: 111,
    globalAccountId: '1',
  },
  {
    currencyIcon: 'flag2',
    currencyName: 'pepa',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
  {
    currencyIcon: 'flag3',
    currencyName: 'otheraccount',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
  {
    currencyIcon: 'flag4',
    currencyName: '1444444',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
  {
    currencyIcon: 'flag5',
    currencyName: '5555',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
  {
    currencyIcon: 'flag6',
    currencyName: '6666',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
  {
    currencyIcon: 'flag7',
    currencyName: '7777',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
  {
    currencyIcon: 'flag8',
    currencyName: '8888',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
  {
    currencyIcon: 'flag9',
    currencyName: '9999',
    currencyType: 'SGD',
    amount: 222,
    globalAccountId: '2',
  },
];

const App = () => {
  return <CurrencySlyder slides={slides} />;
};

export default App;
