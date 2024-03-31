import Modal from "react-modal";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

export default function ModalContact({ isOpen, onClose, id, name }) {
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("The contact is removed!");
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} style={customStyles}>
        <div>
          <b>Do you really want to delete a contact? {name}</b>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </Modal>
    </div>
  );
}