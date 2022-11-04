import styled from "styled-components";

export const Button = styled.button`
    width: fit-content;
    color: #fff;
    background: #3f73b8;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    padding: 10px 20px;
    margin-top: 40px;
    cursor: pointer;
    :hover{
        background: #589af0;
    }
`
export const Title = styled.label`
    width: 70%;
    font-size: 25px;
    font-weight: 300;
    margin: 30px 0;   
`
export const ButtonCancel = styled.button`
    width: fit-content;
    color: #fff;
    background: #b83f3f;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    padding: 10px 20px;
    margin-top: 40px;
    cursor: pointer;
    :hover{
        background: #ec5d5d;
    }
`
export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
`
export const Input = styled.input`
    all: unset;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    color: #000;
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    margin: 5px;
    border: 1px solid #6e6eec;;
    border-radius: 7px;
    ::placeholder {
      color: #686565;
    }
`
export const Label = styled.label`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  margin-top: 28px;
  margin-left: 5px;
  @media (max-width:399px){
        width: 100%;
        margin-left: 0;
    }
`