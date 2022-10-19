import styled from "styled-components";

export const CarouselContainer = styled.ul`
  color: red;
  max-width: 1024px;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  margin: 24px 0;

  &:first-of-type {
    margin-left: 0px;
  }

  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;

export const CarouselItem = styled.div`
  border-radius: 3px;
  max-width: 196px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    max-width: 124px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: 32px;
    min-width: 120px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }
`;

export const CarouselItemHead = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  color: #3c4043;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemTitle = styled.h3`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #3c4043;
  padding-right: 16px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #3c4043;
  padding-right: 16px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: #3c4043;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
