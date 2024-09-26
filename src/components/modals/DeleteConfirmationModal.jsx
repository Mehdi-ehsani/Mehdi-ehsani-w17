import styles from "./DeleteConfirmationModal.module.css"
import axios from 'axios';


const DeleteConfirmationModal = ({setIsDeleteModalOpen , contactId}) => {
  const deleteContact = () => {
    axios.delete(`http://localhost:8000/contacts/${contactId}`)
    .then((response) => console.log(response.status, response.data))
    .catch((error) => console.error("Error:", error));
    console.log("fewr")
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