import { useState, useEffect } from "react";
import { StartButton, PauseButton, ResetButton, Container, TimerContainer, TimerText, ButtonsContainer } from "../styles/TimerStyles"; 

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <Container>
      <TimerContainer>
        <TimerText>Timer: {time}s</TimerText>

        <ButtonsContainer>

          <StartButton onClick={() => setIsRunning(true)} disabled={isRunning}>
            {time > 0 ? "Retornar" : "Iniciar"}
          </StartButton>

          <PauseButton onClick={() => setIsRunning(false)} disabled={!isRunning}>
            Pausar
          </PauseButton>

          <ResetButton onClick={() => {setIsRunning(false); setTime(0);}} disabled={time === 0 && !isRunning}>
            Resetar
          </ResetButton>

        </ButtonsContainer>
      </TimerContainer>
    </Container>
  );
};

export default Timer;
