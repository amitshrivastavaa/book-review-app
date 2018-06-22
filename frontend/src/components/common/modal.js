import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalC = ({ open, modalText, modalHeader, cb }) => {
  return (
    <div>
      <Modal size='md' isOpen={open} toggle={cb} centered zIndex={10010}>
        <ModalHeader toggle={cb}>Attention!!!</ModalHeader>
        <ModalBody>
          <div>
            {modalText}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalC;
