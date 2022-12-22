
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #ceead6;
  border-radius: 28px;
  max-width: 1024px;
  padding: 36px 48px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 24px 32px;
  }
`

export const LeftSection = styled.div`
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
  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: 0;
  }
`