import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  height: 56px;
  padding: 0 20px;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.mobile} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
// Mobile and tablet menu
export const Menu = styled.button`
  display: none;
  border: none;
  background: none;
  color: #3c4043;
  width: 24px;
  height: 24px;
  margin-right: 20px;

  & svg {
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: flex;
  }
`

// Navigation Links
export const NavLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #3c4043;
  margin-left: 20px;
  &:hover {
    color: #1967d2;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0.5rem;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons 
export const SocialIcons = styled.a`
color: #3c4043;
display: flex;
align-items: center;
width: ${(props) => props.small ? "20px" : "24px"};
height: ${(props) => props.small ? "20px" : "24px"};
margin-left: 24px;

  &:hover {
    color: #1967d2;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: 8px;
  }
`