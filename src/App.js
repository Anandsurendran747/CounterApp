import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";
function App() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const CounterContainer = styled.div`
    width: 40vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    background-color: rgb(153, 66, 100);
    border: 2px solid black;
    border-radius: 25px;
    padding: 5vw;
  `;

  const ButtonContainer = styled.div`
    flex: 1;
    border: 2px solid black;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0px 0px 5px 1px rgba(250, 255, 244, 1);
  `;
  const NumberContainer = styled.div`
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Number = styled.h1`
    color: white;
    font-size: 10vh;
  `;

  const ResetButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5vh;
    margin-right: 5vw;
    background-color: rgb(153, 66, 100);
    color: white;
    padding: 2vh;
    border: 1px solid black;
    border-radius: 20px;
    font-size: 4vh;
  `;

  const [number, setnumber] = useState(0);
  function clickEvent(f) {
    if (f === "+") {
      setnumber(number + 1);
    } else {
      setnumber(number - 1);
    }
  }
  return (
    <Container>
      <ResetButton onClick={()=>setnumber(0)}>Reset</ResetButton>
      <CounterContainer>
        <ButtonContainer onClick={() => clickEvent("-")}>
          <RemoveIcon fontSize="large" />
        </ButtonContainer>
        <NumberContainer>
          <Number>{number}</Number>
        </NumberContainer>
        <ButtonContainer onClick={() => clickEvent("+")}>
          <AddIcon fontSize="large" />
        </ButtonContainer>
      </CounterContainer>
    </Container>
  );
}

export default App;
