import React from "react";
import Modal from "react-modal";

export interface IModal {
  color: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalScreen = ({ color, openModal, setOpenModal }: IModal) => {

  return (
    <>
      <Modal 
        isOpen={openModal} 
        contentLabel="Example Modal" 
        ariaHideApp={false} 
        style={customStyles}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>Señor usuario el color de la pantalla ha cambiado a "{color}"</h3>
          <button 
            className="button" 
            onClick={() => setOpenModal(false)}
          >
            Cerrar modal
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalScreen;
