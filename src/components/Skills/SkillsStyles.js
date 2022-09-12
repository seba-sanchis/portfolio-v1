import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin: 24px;
  
  @media ${props => props.theme.breakpoints.laptop}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.tablet}{
    margin: 64px 0;
    gap: 24px
  }

  @media ${props => props.theme.breakpoints.mobile}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoints.mobile}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #3C4043;
  margin-bottom: 8px;
  width: 100%;

@media ${props => props.theme.breakpoints.tablet}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.mobile}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: ${(props) => props.long ? "14px" : "16px"};
  line-height: 24px;
  color: #3C4043;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px 0;

  @media ${props => props.theme.breakpoints.tablet}{
    font-size: 14px;
    line-height: 22px;
  }

  @media ${props => props.theme.breakpoints.mobile}{
    font-size: 12px;
    line-height: 20px;
  }
`

export const ListItem = styled.li`
  max-width: 345px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.tablet}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.mobile}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
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