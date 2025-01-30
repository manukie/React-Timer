import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(244, 244, 244);
  }

  html, body {
    height: 100%;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
`;

export const TimerContainer = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TimerText = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const StartButton = styled(Button)`
  background-color:rgb(76, 175, 80);
`;

export const PauseButton = styled(Button)`
  background-color:rgb(244, 67, 54);
`;

export const ResetButton = styled(Button)`
  background-color:rgb(189, 186, 23);
`;
