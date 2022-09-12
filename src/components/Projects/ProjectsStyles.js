import styled from "styled-components";

export const ImgContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 20px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 290px;
  &:hover ${ImgContainer} {
    background-color: #f1eff0;
    transition: background-color 0.5s ease;
  }

  &:hover ${Img} {
    transition: 0.3s transform linear;
    transform: scale(1.05);
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #3c4043;
  padding-top: 20px;
  margin-bottom: 8px;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  color: #3c4043;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 2.5rem 0;
`;

export const ExternalLinks1 = styled.a`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: #1967D2;
  transition: all 250ms cubic-bezier(0.1, 0.1, 0, 1);

  &:hover {
    background: linear-gradient( 0deg, rgb(25 24 24 / 16%), rgb(25 24 24 / 16%) ), #1967d2;
    box-shadow: 0 1px 2px rgb(66 63 63 / 30%), 0 1px 3px 1px rgb(66 63 63 / 15%);
  }
`;

export const ExternalLinks2 = styled.a`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #1967D2;
  padding: 6px 8px;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.1, 0.1, 0, 1);
  margin-left: 16px;

  &:hover {
    background: linear-gradient( 0deg, rgb(26 115 232 / 4%), rgb(26 115 232 / 4%) ), var(--theme-background-color, #fff);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Tag = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  border-radius: 20px;
  padding: 2px 8px;
  background-color: #e8f0fe;
  color: #1967d2;
`;
