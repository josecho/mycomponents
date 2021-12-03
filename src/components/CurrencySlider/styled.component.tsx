import styled from 'styled-components';

export const CurrencySliderWrapper = styled.div`
  background-color: white;
  padding: 24px 48px;
  /* margin: -32px -32px 16px; */
  position: relative;
  box-shadow: 10px 5px 5px black;
`;

export const CurrencySliderViewPort = styled.div`
  overflow: hidden;
`;

export const CurrencySliderButtonPrev = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 85%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 200;
`;

export const CurrencySliderButtonNext = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 15%
  );
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CurrencySliderButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  border: 1px solid brown;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 5px 5px black;
  svg {
    width: 16px;
    height: 16px;
  }
  cursor: pointer;
`;

export const CurrentSliderInner = styled.div`
  display: inline-flex;
  transform: translate(0);
  transition: transform 0.3s;
`;

// CurrencySlide
export const CurrencySlidePlusIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0;
`;

export const CurrencySlideWrapper = styled.div<{ isActive?: boolean }>`
  position: relative;
  width: 208px;
  height: 92px;
  background-color: white;
  border: 1px solid ${(props) => (props.isActive ? 'blue' : 'green')};
  box-shadow: 10px 5px 5px black;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 16px;
  cursor: pointer;
  :hover {
    ${CurrencySlidePlusIcon} {
      opacity: 1;
    }
  }
`;

export const CurrencySlideTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 24 px;
    height: 24px;
  }
  p {
    margin: 0 0 0 8px;
  }
`;

export const CurrencySlideFlagWrapper = styled.span`
  font-size: 20px;
  line-height: 0;
`;

export const CurrencySlidePlusIconWrapper = styled.span`
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
`;
