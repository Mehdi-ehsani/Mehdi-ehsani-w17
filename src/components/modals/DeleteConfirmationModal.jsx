import styles from "./DeleteConfirmationModal.module.css"
import { useState } from "react"


const DeleteConfirmationModal = ({setIsDeleteModalOpen , index}) => {
  const [data , setData] = useState(JSON.parse(localStorage.getItem("contacts")) || [])
  const deleteContact = () => {
     const filteredData = data.filter((contact , indexContact) => indexContact !== index)
     console.log(filteredData , index)
     localStorage.setItem("contacts" , JSON.stringify(filteredData))
     setIsDeleteModalOpen(false)
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