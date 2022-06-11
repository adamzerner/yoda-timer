import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import InfoModal from "./InfoModal.js";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [numSecondsLeft, setNumSecondsLeft] = useState(5 * 60);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
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
      setNumSecondsLeft(5 * 60);
    }
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setNumSecondsLeft((n) => {
          if (n > 1) {
            return n - 1;
          } else if (n === 1) {
            new Audio("./ding.mp3").play();
            setIsActive(false);

            return 5 * 60;
          }
        });
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
          <i
            className="bi bi-info-circle float-end"
            onClick={() => setIsInfoModalVisible(true)}
            style={{ cursor: "pointer" }}
          ></i>
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
            disabled={!isActive}
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
      <InfoModal
        show={isInfoModalVisible}
        handleClose={() => setIsInfoModalVisible(false)}
      />
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
