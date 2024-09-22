import styles from './ContactCard.module.css'
import userImg from "../../assets/image/user.png"

const ContactCard = ({name , email , job , id}) => {
  return (
    <div className={styles.container}>
        <img className={styles.img} src={userImg} alt='icon'/>
        <div className={styles.infoContainer}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.job}>{job}</h2>
        <h1 className={styles.email}>{email}</h1>
        </div>
        <div className={styles.btnContainer}>
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.deleteBtn}>Delete</button>
        </div>
    </div>
  )
}

export default ContactCard