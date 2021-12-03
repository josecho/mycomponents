import React, { FC } from 'react';
import {
  CurrencySlideFlagWrapper,
  CurrencySlidePlusIcon,
  CurrencySlidePlusIconWrapper,
  CurrencySlideTitleWrapper,
  CurrencySlideWrapper,
} from './styled.component';
import { AiOutlinePlusCircle as PlusCircle } from 'react-icons/all';
import { ICurrencySlideProps } from './types';

const CurrencySlide: FC<ICurrencySlideProps> = ({
  currencyIcon,
  currencyName,
  currencyType,
  amount,
  isActive,
  onClick,
}) => {
  return (
    <CurrencySlideWrapper isActive={isActive} onClick={onClick}>
      <CurrencySlideTitleWrapper>
        <CurrencySlideFlagWrapper>{currencyIcon}</CurrencySlideFlagWrapper>
        <div>{currencyName}</div>
        <div>{currencyType}</div>
        <CurrencySlidePlusIconWrapper>
          <CurrencySlidePlusIcon>
            <PlusCircle />
          </CurrencySlidePlusIcon>
        </CurrencySlidePlusIconWrapper>
      </CurrencySlideTitleWrapper>
    </CurrencySlideWrapper>
  );
};

export default CurrencySlide;
