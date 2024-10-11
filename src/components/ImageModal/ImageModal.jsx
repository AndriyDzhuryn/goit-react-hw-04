import Modal from 'react-modal';

import css from './ImageModal.module.css';

const customStyles = {
  content: {
    marginTop: '30px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, closeModal, modalImage }) => {
  return (
    <div className={css.modalBox}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={modalImage.image} alt={modalImage.alt_description} />
        <div className={css.descriptionImageBox}>
          <p className={css.descriptionImage}>{modalImage.alt_description}</p>
          <h3 className={css.titleImg}>Author: {modalImage.userName}</h3>
        </div>

        <div className={css.socialImageBox}>
          <p>Likes: {modalImage.likes}</p>
          <p>Instagram: {modalImage.instagram}</p>
          <p>Location: {modalImage.location}</p>
          <a href={modalImage.links}> Download </a>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
