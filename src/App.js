import { useEffect, useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [numSecondsLeft, setNumSecondsLeft] = useState(60 * 5);
  const start = () => {
    setIsActive(true);
  };
  const pause = () => alert("Pause a Yoda Timer, one shall not.");
  const reset = () => {
    setIsActive(false);
    setNumSecondsLeft(60 * 5);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setNumSecondsLeft((n) => n - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <section>
      <Display numSecondsLeft={numSecondsLeft} />
      <section>
        <button type="button" onClick={start} disabled={isActive}>
          Start
        </button>
        <button type="button" onClick={pause}>
          Pause
        </button>
        <button type="button" onClick={reset} disabled={!isActive}>
          Reset
        </button>
      </section>
      <section>Yoda</section>
    </section>
  );
};

const Display = ({ numSecondsLeft }) => {
  const mins = Math.floor(numSecondsLeft / 60);
  const seconds = numSecondsLeft % 60;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <section>
      {mins}:{secondsDisplay}
    </section>
  );
};

export default App;
