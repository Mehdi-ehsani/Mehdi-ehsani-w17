import React from 'react'
import notfoundImg from "../../assets/image/404.png"
import styles from "./404.module.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.notfoundContainer}>
        <img className={styles.pic} src={notfoundImg} />
         <Link to="/">Back to Contacts List</Link>
    </div>
  )
}

export default NotFound