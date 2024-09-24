import React , {useContext , useState} from 'react'
import styles from './ContactCard.module.css'
import userImg from "../../assets/image/user.png"
import { ContactsContext } from "../../context/ContactsProvider";
import EditContactModal from '../editContactModal/EditContactModal';
import axios from 'axios';



const ContactCard = ({name , email , job , id ,isSelected , handleCheckboxChange , showCheckBox}) => { 
	const [{ isLoading, data, error } , dispatchContact] = useContext(ContactsContext);
  const [editData , setEditData] = useState(null)
  const [isModalOpen , setIsModalOpen] = useState(false)

  const editHandler = () => {
    const contactToEdit = data.find(contact => contact.id === id);
    setEditData(contactToEdit);
    setIsModalOpen(true)
  }
  const deleteContact = () => {
    axios.delete(`http://localhost:8000/contacts/${id}`)
      .then((response) => console.log(response.status, response.data))
      .catch((error) => console.error("Error:", error));
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
            <button onClick={deleteContact} className={styles.deleteBtn}>Delete</button>
            {showCheckBox &&   <input  type="checkbox" checked={isSelected} onChange={() => handleCheckboxChange(id)}/>}
        </div>
    </div>
    {isModalOpen && <EditContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} name={editData.name} id={editData.id} email={editData.email} job={editData.job}  />}
    </>
  )
}

export default ContactCard