import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [numSecondsLeft, setNumSecondsLeft] = useState(60 * 5);
  const start = () => {
    setIsActive(true);
  };
  const pause = () => alert("Pause a Yoda Timer, one shall not.");
  const reset = () => {
    const shouldContinue = window.confirm(
      "Precommitment, a Yoda Timer implies. Are you sure you want to reset?"
    );

    if (shouldContinue) {
      setIsActive(false);
      setNumSecondsLeft(60 * 5);
    }
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
    <Container className="mt-5">
      <Card className="text-center">
        <Card.Header>
          <i class="bi bi-info-circle float-end"></i>
        </Card.Header>
        <Card.Body>
          <Display numSecondsLeft={numSecondsLeft} />
          <Image
            src="https://i.ytimg.com/vi/m5gVQvYNUdI/maxresdefault.jpg"
            width="250"
          />
        </Card.Body>
        <Card.Footer>
          <Button
            type="button"
            variant="secondary"
            onClick={start}
            disabled={isActive}
            className="me-2"
          >
            Start
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={pause}
            className="me-2"
          >
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
        </Card.Footer>
      </Card>
    </Container>
  );
};

const Display = ({ numSecondsLeft }) => {
  const mins = Math.floor(numSecondsLeft / 60);
  const seconds = numSecondsLeft % 60;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <section style={{ fontFamily: "monospace", fontSize: 64 }}>
      {mins}:{secondsDisplay}
    </section>
  );
};

export default App;
