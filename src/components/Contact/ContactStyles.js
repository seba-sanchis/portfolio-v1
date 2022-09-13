import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputContainer = styled.div`
    border: 1px solid #dadce0;
    border-radius: 4px;
    height: ${(props) => props.area ? "200px" : "40px"};
    width: 500px;
    margin: 8px 0;
    display: flex;
    align-items: ${(props) => props.area ? "start" : "center"};
    &:focus-within {
        border: 1px solid #8ab4f8;
        background: #e8f0fe;
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    background: none;
    padding: 0 8px;
    color: #202124;
    letter-spacing: .25px;
    font-size: 14px;
    font-weight: 500px;
    line-height: 20px;
    caret-color: #0b57d0;
    height: 100%;
    width: 100%;
    &::placeholder {
        color: #202124;
        letter-spacing: .25px;
        opacity: .6;
    }
`

export const TextArea = styled.textarea`
    border: none;
    outline: none;
    background: none;
    padding: 8px;
    color: #202124;
    caret-color: #0b57d0;
    letter-spacing: .25px;
    font-size: 14px;
    line-height: 20px;
    height: 100%;
    width: 100%;
    resize: none;
    &::placeholder {
        color: #202124;
        letter-spacing: .25px;
        opacity: .6;
    }
`

export const SuccessMessage = styled.h3`

`