import { useState, useEffect } from "react";

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
    <div>
      <h1>Timer: {time}s</h1>
      <button onClick={() => setIsRunning(true)}>Iniciar</button>
      <button onClick={() => setIsRunning(false)}>Pausar</button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>Recomeçar</button>
    </div>
  );
};

export default Timer;
