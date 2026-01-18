import styled from "styled-components"
const colorList = ["red", "skyblue"]

const StyleDiv01 = styled.div`
    font-size:30px;
    background-color: beige
`;
const StyleH1 = styled.h1`
  background-color: ${colorList[0]};
  color: ${colorList[1]}
`;

const Test02 = () => {
    return (
      <>
        <StyleDiv01>TestCom02</StyleDiv01>
        <hr></hr>
        <StyleH1>tete</StyleH1>
      </>
    );
}
export default Test02;