import styled from 'styled-components'

export const List = styled.ul`
  width: 1024px;
  border-bottom: 1px solid #dadce0;
`

export const ListItems = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-top: ${(props) => props.top ? "0" : "1px solid #dadce0" };
`

export const ListTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: initial;
  line-height: 24px;
  color: #1a73e8;
  flex: 1 1 auto;
  align-self: center;
  margin-left: 8px;
`

export const ToggleButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0 4px;
  border: none;
  background: none;
  color: #1a73e8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ListContainer = styled.div`
  display: flex;
  padding: 28px 0 27px;
  width: 100%;
  border-top: 1px solid #dadce0;
  cursor: pointer;
  
  &:focus {
    border-bottom: 2px solid #174ea6;
  }

  &:focus ${ListTitle} {
    color: #174ea6;
  }

  &:focus ${ToggleButton} {
    color: #174ea6;
  }

  &:hover ${ListTitle} {
    color: #174ea6;
  }

  &:hover ${ToggleButton} {
    color: #174ea6;
  }
`

export const ListContent = styled.div`
  display: flex;
  border-top: 1px solid #dadce0;
  width: 100%;
  padding: 24px 2px;
  display: grid;
  grid-template-columns: repeat(4,minmax(5px,1fr));
  grid-column-gap: 48px;
`

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #3C4043;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 16px 0;
  margin-bottom: auto;
  margin-left: 16px;
  margin-top: auto;
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.tablet}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.mobile}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

// Social Icons 
export const SocialIcons = styled.div`
color: #3C4043;
display: flex;
align-items: center;
width: 24px;
height: 24px;
`

export const CarouselContainer = styled.ul`
  color: red;
  max-width: 1024px;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  overflow-x: hidden;
  margin: 24px;

  &:first-of-type{
    margin-left: 0px;
  }

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.mobile} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`

export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.mobile} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    margin-left: 32px;
    min-width: 120px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  color: #3C4043;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  width: 100%;

  @media ${props => props.theme.breakpoints.mobile} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #3C4043;
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.mobile} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: #3C4043;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`