import React , {useContext , useState} from 'react'
import styles from './ContactCard.module.css'
import userImg from "../../assets/image/user.png"
import { ActiveTabContext } from '../../context/ActiveTabProvider'
import { ContactsContext } from "../../context/ContactsProvider";
import EditContactModal from '../editContactModal/EditContactModal';



const ContactCard = ({name , email , job , id}) => { 
	const [{ isLoading, data, error } , dispatchContact] = useContext(ContactsContext);
  const [editData , setEditData] = useState(null)
  const [isModalOpen , setIsModalOpen] = useState(false)

  const editHandler = () => {
    const contactToEdit = data.find(contact => contact.id === id);
    setEditData(contactToEdit);
    setIsModalOpen(true)
  }
  const deleteContact = () => {
    fetch(`http://localhost:8000/contacts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Contact deleted successfully");
        } else {
          console.error("Failed to delete contact");
        }
      })
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
        </div>
    </div>
    {isModalOpen && <EditContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} name={editData.name} id={editData.id} email={editData.email} job={editData.job}  />}
    </>
  )
}

export default ContactCard