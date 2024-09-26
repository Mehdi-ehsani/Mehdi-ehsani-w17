import React, { useContext ,useState } from "react";
import { ContactsContext } from "../../context/ContactsProvider";
import ContactCard from "../contactCard/ContactCard";
import styles from "./contacts.module.css"
import axios from "axios";

const Contacts = () => {
	const [{ isLoading, data, error }, dispatchContact] = useContext(ContactsContext);
	const [selectedIds, setSelectedIds] = useState([]);
	const [showCheckBox , setShowCheckBox] = useState(false)

	const handleCheckboxChange = (id) => {
		setSelectedIds((prevSelectedIds) => {
		  if (prevSelectedIds.includes(id)) {
			return prevSelectedIds.filter((selectedId) => selectedId !== id);
		  } else {
			return [...prevSelectedIds, id];
		  }
		});
	  };
	  const deleteSelectedContacts = () => {
		axios.all(selectedIds.map(id => axios.delete(`http://localhost:8000/contacts/${id}`)))
		 .then(res => console.log("Delete All",res))
		 .catch(error => console.log("Error",error))
		setSelectedIds([]);
	  };  
	return (
		<div>
			<div>{isLoading && <h1>Loading...</h1>}</div>
	        <div className={styles.btnContainer}>
			<div>{selectedIds.length > 0 && <button className={styles.deleteAllBtn} onClick={deleteSelectedContacts}>Delete All</button>}</div>
			<div>{!!data.length && <button className={styles.selectBtn} onClick={() => {setShowCheckBox(!showCheckBox); setSelectedIds([])}}>{showCheckBox ? "Deselect All" : "Select All"}</button>}</div>
			</div>
			<div className={styles.contactsContainer}>
				{!!data.length &&
					data.map((contact) => (
						<ContactCard
						    key={contact.id}
							name={contact.name}
							email={contact.email}
							id={contact.id}
							job={contact.job}
							isSelected={selectedIds.includes(contact.id)}
							handleCheckboxChange={handleCheckboxChange}
							showCheckBox={showCheckBox}
						/>
					))}
					
			</div>
			<div>{!!error && <h1>{error}</h1>}</div>
		</div>
	);
};

export default Contacts;
