import styled from 'styled-components'


export const ContactName = styled.span`

  margin-right: 10px;
`;

export const ContactNumber = styled.span`
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 20px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  border: 3px solid rgb(252, 70, 100);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(252, 70, 100);
    transform: translateX(-100%);
    transition: all .3s;
    z-index: -1;
  }
  :hover{
    color: white;
  }
  :hover::before {
    transform: translateX(0);
  }

  //padding: 5px 20px;
  //margin-left: 20px;
  //font-size: 14px;
  //border-radius: 6px;
  //border: 1px solid;
  //  :hover {
  //  background-color: #e0e0e0;
  //}
`;
