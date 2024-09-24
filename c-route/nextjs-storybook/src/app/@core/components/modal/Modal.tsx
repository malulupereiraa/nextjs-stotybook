import { Button, Modal } from "react-bootstrap";
import { ModalProps } from "../../types/modal";

const ModalCustom: React.FC<ModalProps> = ({
  isOpen,
  title,
  body,
  sizeModal,
  center,
  onCloseAction,
  onSubmitAction,
}) => {
  return (
    <>
      <Modal
        show={isOpen}
        onHide={onCloseAction}
        centered={center !== undefined ? center : false}
        size={sizeModal !== undefined ? sizeModal : "md"}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={onCloseAction}>
            Cancelar
          </Button>
          <Button variant="primary" size="sm" onClick={onSubmitAction}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCustom;
