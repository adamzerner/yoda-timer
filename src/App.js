import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
    <Container>
      <Display numSecondsLeft={numSecondsLeft} />
      <section>
        <Button
          type="button"
          variant="secondary"
          onClick={start}
          disabled={isActive}
        >
          Start
        </Button>
        <Button type="button" variant="secondary" onClick={pause}>
          Pause
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={reset}
          disabled={!isActive}
        >
          Reset
        </Button>
      </section>
      <section>Yoda</section>
    </Container>
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
