import React, { useContext ,useState } from "react";
import { ContactsContext } from "../../context/ContactsProvider";
import ContactCard from "../contactCard/ContactCard";
import styles from "./contacts.module.css"

const Contacts = () => {
	const [{ isLoading, data, error }, dispatchContact] = useContext(ContactsContext);
	const [selectedIds, setSelectedIds] = useState([]);

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
		selectedIds.forEach((id) => {
		  fetch(`http://localhost:8000/contacts/${id}`, {
			method: 'DELETE',
		  })
			.then((response) => {
			  if (response.ok) {
				console.log(`Contact with id ${id} deleted successfully`);
			  } else {
				console.error(`Failed to delete contact with id ${id}`);
			  }
			})
			.catch((error) => console.error('Error:', error));
		});
		setSelectedIds([]);
	  };  
	return (
		<div>
			<div>{isLoading && <h1>Loading...</h1>}</div>
			<div>{selectedIds.length > 0 && <button onClick={deleteSelectedContacts}>Del All</button>}</div>
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
						/>
					))}
					
			</div>
			<div>{!!error && <h1>{error}</h1>}</div>
		</div>
	);
};

export default Contacts;
