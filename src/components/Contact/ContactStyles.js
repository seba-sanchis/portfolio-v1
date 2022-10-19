import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  border: ${(props) => props.error ? "1px solid #d93025" : "1px solid #dadce0"};
  border-radius: 4px;
  height: ${(props) => (props.area ? "168px" : "56px")};
  width: 500px;
  margin: 8px 0;
  display: flex;
  align-items: ${(props) => (props.area ? "start" : "center")};
  &:focus-within {
    border: ${(props) => props.error ? "2px solid #d93025" : "2px solid #1967d2"};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  color: #202124;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400px;
  padding: 13px 15px;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 2;
`;

export const Placeholder = styled.div`
  background: #fff;
  margin-top: ${(props) => (props.area ? "15px" : "")};
  margin-left: 8px;
  color: ${(props) => props.error ? "#d93025" : props.blur ? "#1967d2" : "#5f6368"};
  font-size: 16px;
  font-weight: 400;
  padding: 0 8px;
  position: absolute;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => (props.focus ? "scale(0.75) translateY(-35px)" : "")};
  transform-origin: bottom left;
  z-index: ${(props) => (props.focus ? "3" : "1")};
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  background: none;
  padding: 13px 15px;
  color: #202124;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400px;
  height: 100%;
  width: 100%;
  resize: none;
  z-index: 2;
`;

export const SuccessMessage = styled.h3`
  font-size: 20px;
  line-height: 26px;
  color: #188038;
  display: flex;
`;

export const ErrorContainer = styled.div`
  align-items: flex-start;
  color: #d93025;
  display: flex;
  font-size: 12px;
  line-height: normal;
  margin-top: 2px;
`;

export const Error = styled.span`
  margin-left: 8px;
`;
