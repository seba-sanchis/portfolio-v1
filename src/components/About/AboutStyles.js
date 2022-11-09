
import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 100%;
  }
`

export const Portrait = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-left: 48px;
`