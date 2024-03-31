import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import ModalContact from "../Modal/ModalContact";

export default function Contact({ contact: { id, name, number } }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div className={css.listItem}>
      <ul className={css.infoBlock}>
        <li className={css.wrap}>
          <FaUser />
          <p>{name}</p>
        </li>
        <li className={css.wrap}>
          <FaPhoneAlt />
          <p>{number}</p>
        </li>
      </ul>
      <button className={css.button} onClick={openModal} id={id}>
        Delete
      </button>
      {modalIsOpen && (
        <ModalContact
          onClose={closeModal}
          isOpen={modalIsOpen}
          id={id}
          name={name}
        />
      )}
    </div>
  );
}