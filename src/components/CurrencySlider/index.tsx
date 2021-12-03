import React, { FC, useEffect, useRef, useState } from 'react';
import {
  CurrencySliderButtonIcon,
  CurrencySliderButtonNext,
  CurrencySliderButtonPrev,
  CurrencySliderViewPort,
  CurrencySliderWrapper,
  CurrentSliderInner,
} from './styled.component';
import { ICurrencySliderProps } from './types';
import { AiOutlineArrowLeft as ChevronLeft } from 'react-icons/all';
import { AiOutlineArrowRight as ChevronRigth } from 'react-icons/all';
import CurrencySlide from './CurrencySlide';

const SLIDE_MARGIN = 16;
const SLIDE_WIDHT = 208 + SLIDE_MARGIN;
const TRANSITION_DELAY = 300;

const CurrencySlyder: FC<ICurrencySliderProps> = ({
  slides,
  //selecCurrencyAccount,
}) => {
  const viewport = useRef<HTMLDivElement>(null);
  const innerSlider = useRef<HTMLDivElement>(null);
  const isSliding = useRef<boolean>(false);
  const [showPrevButton, setShowPrevButton] = useState<boolean>(false);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(0);
  const [lastTranslateValue, setLastTranslateValue] = useState<number>(0);
  const numberOfSlides = slides.length;

  const onClickPrev = (): void => {
    if (!innerSlider.current || isSliding.current) return;
    const translateValue = lastTranslateValue + SLIDE_WIDHT;
    innerSlider.current.style.transform = `translateX(${translateValue}px)`;
    setLastTranslateValue(translateValue);
    isSliding.current = true;
  };

  const onClickNext = (): void => {
    if (!innerSlider.current || isSliding.current) return;
    const translateValue = lastTranslateValue - SLIDE_WIDHT;
    innerSlider.current.style.transform = `translateX(${translateValue}px)`;
    setLastTranslateValue(translateValue);
    isSliding.current = true;
  };

  useEffect(() => {
    setTimeout(() => {
      setShowNextButton(numberOfSlides > 5 && canGoToNextSlide());
      setShowPrevButton(numberOfSlides > 5 && lastTranslateValue < 0);
      isSliding.current = false;
    }, TRANSITION_DELAY);
  }, [numberOfSlides, lastTranslateValue]);

  const canGoToNextSlide = (): boolean => {
    if (!innerSlider.current || !viewport.current) return false;
    const rectInnerslider = innerSlider.current.getBoundingClientRect();
    const rectViewport = viewport.current.getBoundingClientRect();
    return rectInnerslider.right - SLIDE_MARGIN > rectViewport.right;
  };

  return (
    <CurrencySliderWrapper>
      <CurrencySliderViewPort ref={viewport}>
        {showPrevButton && (
          <CurrencySliderButtonPrev>
            <CurrencySliderButtonIcon onClick={onClickPrev}>
              <ChevronLeft />
            </CurrencySliderButtonIcon>
          </CurrencySliderButtonPrev>
        )}
        <CurrentSliderInner ref={innerSlider}>
          {slides.map(
            (
              {
                currencyIcon,
                currencyName,
                currencyType,
                amount,
                globalAccountId,
              },
              index
            ) => {
              return (
                <CurrencySlide
                  key={`currencySlide_${currencyName}`}
                  currencyIcon={currencyIcon}
                  currencyName={currencyName}
                  currencyType={currencyType}
                  amount={amount}
                  isActive={index === activeItem}
                  globalAccountId={globalAccountId}
                  onClick={() => {
                    setActiveItem(index);
                  }}
                />
              );
            }
          )}
        </CurrentSliderInner>
        {showNextButton && (
          <CurrencySliderButtonNext>
            <CurrencySliderButtonIcon onClick={onClickNext}>
              <ChevronRigth />
            </CurrencySliderButtonIcon>
          </CurrencySliderButtonNext>
        )}
      </CurrencySliderViewPort>
    </CurrencySliderWrapper>
  );
};

export default CurrencySlyder;
