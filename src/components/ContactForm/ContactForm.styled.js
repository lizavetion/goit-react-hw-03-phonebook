import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Button = styled.button`
  width: 170px;
  height: 50px;
  font-size: 18px;
  background: #fff;
  border: black 1px solid;
  border-radius: 50px;
  color: #000;
  outline: none;
  cursor: pointer;
  transition: all 0.4s;
  :hover{
    border: none;
    box-shadow: inset 0 0 0 4px #ef476f,
    inset 0 0 0 8px #ffd166,
    inset 0 0 0 12px #06d6a0,
    inset 0 0 0 16px #118ab2;
    background: #073b4c;
    color: #fff;
  }
  //padding: 10px 20px;
  //margin-top: 5px;
  //font-size: 14px;
  //border-radius: 6px;
  //border: 1px solid;
  //  :hover {
  //  background-color: #e0e0e0;
  //}
`;

export const Text = styled.p`
  margin-bottom: 15px;
`;
