
import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #E9E3DB;
  height: 260px;
  border-radius: 28px;
  padding: 24px 48px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 100%;
    align-items: center;
  }
`

export const Portrait = styled.img`
  display: flex;
  width: 200px;
  border-radius: 50%;
`