import Modal from "react-bootstrap/Modal";

const InfoModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>What are Yoda Timers?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      I will not close if you click outside me. Don't even try to press escape
      key.
    </Modal.Body>
  </Modal>
);

export default InfoModal;
