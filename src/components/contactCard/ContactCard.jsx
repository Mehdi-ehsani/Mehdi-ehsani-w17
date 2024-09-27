import React , { useState} from 'react'
import styles from './ContactCard.module.css'
import userImg from "../../assets/image/user.png"
import EditContactModal from '../editContactModal/EditContactModal';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';



const ContactCard = (props) => { 
  const {name , email , job , id ,isSelected , handleCheckboxChange , showCheckBox , index} = props;
	const [data , setData] = useState(JSON.parse(localStorage.getItem("contacts")) || [])
  const [editData , setEditData] = useState(null)
  const [isEditModalOpen , setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen , setIsDeleteModalOpen] = useState(false)

  const editHandler = () => {
    const contactToEdit = data.find((contact, indexContact) => indexContact === index);
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
            {showCheckBox &&   <input  type="checkbox"  checked={isSelected} onChange={() => handleCheckboxChange(index)}/>}
        </div>
    </div>
    {isEditModalOpen && <EditContactModal index={index} isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} name={editData.name} id={editData.id} email={editData.email} job={editData.job}  />}
    {isDeleteModalOpen && <DeleteConfirmationModal index={index} contactId={id} setIsDeleteModalOpen={setIsDeleteModalOpen}/>}
    </>
  )
}

export default ContactCard