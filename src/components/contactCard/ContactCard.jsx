import React , {useContext , useState} from 'react'
import styles from './ContactCard.module.css'
import userImg from "../../assets/image/user.png"
import { ContactsContext } from "../../context/ContactsProvider";
import EditContactModal from '../editContactModal/EditContactModal';
import axios from 'axios';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';



const ContactCard = ({name , email , job , id ,isSelected , handleCheckboxChange , showCheckBox}) => { 
	const [{ isLoading, data, error } , dispatchContact] = useContext(ContactsContext);
  const [editData , setEditData] = useState(null)
  const [isEditModalOpen , setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen , setIsDeleteModalOpen] = useState(false)

  const editHandler = () => {
    const contactToEdit = data.find(contact => contact.id === id);
    setEditData(contactToEdit);
    setIsEditModalOpen(true)
  }
  return (
    <>
    <div className={styles.container}>
        <img className={styles.img} src={userImg} alt='icon'/>
        <div className={styles.infoContainer}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.job}>{job}</h2>
        <h1 className={styles.email}>{email}</h1>
        </div>
        <div className={styles.btnContainer}>
            <button onClick={editHandler} className={styles.editBtn}>Edit</button>
            <button onClick={() => setIsDeleteModalOpen(true)} className={styles.deleteBtn}>Delete</button>
            {showCheckBox &&   <input  type="checkbox"  checked={isSelected} onChange={() => handleCheckboxChange(id)}/>}
        </div>
    </div>
    {isEditModalOpen && <EditContactModal isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} name={editData.name} id={editData.id} email={editData.email} job={editData.job}  />}
    {isDeleteModalOpen && <DeleteConfirmationModal contactId={id} setIsDeleteModalOpen={setIsDeleteModalOpen}/>}
    </>
  )
}

export default ContactCard