import Modal from "react-bootstrap/Modal";

const InfoModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>What are Yoda Timers?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        The idea is that you spend five full minutes making a real effort at
        something. It may not sound like a lot, but sometimes it's just what you
        need.
      </p>
      See the{" "}
      <a href="https://www.lesswrong.com/tag/five-minute-timers">wiki page</a>,{" "}
      <a href="https://www.lesswrong.com/posts/fhEPnveFhb9tmd7Pe/use-the-try-harder-luke">
        Use the Try Harder, Luke
      </a>
      , and this excerpt from{" "}
      <a href="http://www.hpmor.com/">
        Harry Potter and the Methods of Rationality
      </a>{" "}
      for more info.
      <figure style={{ marginTop: 15, marginLeft: 50 }}>
        <blockquote>
          <p>
            Then they turned serious. "But Harry, we don't really know how to do
            anything like that -"
          </p>
          <p>
            "So figure it out," Harry said. "I have confidence in you. Not{" "}
            <em>total</em> confidence, but if you <em>can't</em> do it,{" "}
            <em>tell</em> me that, and I'll try someone else, or do it myself.
            If you have a really good idea - for both the ridiculous story, and
            how to convince Rita Skeeter and her editors to print it - then you
            can go ahead and do it. But don't go with something mediocre. If you
            can't come up with something <em>awesome</em>, just say so."
          </p>
          <p>Fred and George exchanged worried glances.</p>
          <p>"I can't think of anything," said George.</p>
          <p>"Neither can I," said Fred. "Sorry."</p>
          <p>Harry stared at them.</p>
          <p>
            And then Harry began to explain how you went about thinking of
            things.
          </p>
          <p>It had been known to take longer than two seconds, said Harry.</p>
          <p>
            You <em>never</em> called <em>any</em> question impossible, said
            Harry, until you had taken an actual clock and thought about it for
            five minutes, by the motion of the minute hand. Not five minutes
            metaphorically, five minutes by a physical clock.
          </p>
        </blockquote>
        <figcaption class="mt-1 blockquote-footer">
          Eliezer Yudkowsky in{" "}
          <cite title="Harry Potter and the Methods of Rationality">
            Harry Potter and the Methods of Rationality, Chapter 25
          </cite>
        </figcaption>
      </figure>
    </Modal.Body>
  </Modal>
);

export default InfoModal;
