//import { ReactElement } from 'react';

export interface ICurrencySlide {
  currencyIcon: string;
  currencyName: string;
  currencyType: string;
  amount: number;
  globalAccountId: string;
}

export interface ICurrencySlideProps extends ICurrencySlide {
  isActive: boolean;
  onClick: () => void;
}

export interface ISelectCurrencyAccount {
  currencyType: string;
  globalAccountId: string;
}

export interface ICurrencySliderProps {
  slides: Array<ICurrencySlide>;
  //selectCurrencyAccount: (parameters: ISelectCurrencyAccount) => void;
}
