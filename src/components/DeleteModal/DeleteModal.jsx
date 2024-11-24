import { useSelector, useDispatch } from "react-redux";
import { selectModalState } from '../../redux/modal/selectors';
import { closeModal } from "../../redux/modal/slice";
import { deleteContact } from "../../redux/contacts/operations";
import { Toaster, toast } from 'react-hot-toast';
import Modal from "react-modal";
import styles from './DeleteModal.module.css';

Modal.setAppElement('#root'); 

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '10px', 
    padding: '0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
  },
    overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};

export const DeleteModal = () => {

 const   dispatch = useDispatch();
const modal = useSelector(selectModalState);

  const handleConfirm = () => {
    if (modal.contact) {
        dispatch(deleteContact(modal.contact.id)); 
        toast.success('Successfully deleted', {
        position: 'top-center',
        duration: 3000,
        style: {
          background: '#ff7575',
          color: '#363636',
          fontWeight: '600',
        },
        });
    }
    dispatch(closeModal()); 
  };

  return (
      <Modal
        style={customStyles}
        isOpen={modal.isOpen}
        onRequestClose={() => dispatch(closeModal())}
      >
        <div>
          <div className={styles.modal}>
          {modal.contact && <p className={styles.text}>Are you sure?</p>}
          <div className={styles.wrap}>
            <button className={styles.deleteBtn} type='submit' onClick={handleConfirm}>Delete</button>
            <button className={styles.cancelBtn} type='submit' onClick={() => dispatch(closeModal())}>Cancel</button>
          </div>
              </div>
              <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 40,
        }}
      />
        </div>
      </Modal>
  );
};
