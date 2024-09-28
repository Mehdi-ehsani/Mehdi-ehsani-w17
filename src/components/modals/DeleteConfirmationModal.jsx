import styles from "./DeleteConfirmationModal.module.css"
import axios from 'axios';
import { useContext } from "react";
import { ContactsContext } from "../../context/ContactsProvider";


const DeleteConfirmationModal = ({setIsDeleteModalOpen , contactId}) => {
  const [{ isLoading, data, error }, dispatchContact] =
		useContext(ContactsContext);

  const deleteContact = () => {
    axios.delete(`http://localhost:8000/contacts/${contactId}`)
    .then((response) => {
      console.log(response.status, response.data)
      return axios.get("http://localhost:8000/contacts");
    })
    .then(({ data }) => {
      dispatchContact({ type: "SUCCES", payload: data });
      setIsDeleteModalOpen(false);
    })
    .catch((error) => console.error("Error:", error));
  }  
  return (
    <div className={styles.container} onClick={() => setIsDeleteModalOpen(false)}>
        <div className={styles.deleteModal} onClick={(e) => e.stopPropagation()}>
            <h1>Do You Want Delete This Contact?</h1>
            <div>
                <button onClick={() => setIsDeleteModalOpen(false)} className={styles.closeBtn}>No</button>
                <button onClick={deleteContact} className={styles.deleteBtn}>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteConfirmationModal