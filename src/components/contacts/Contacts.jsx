import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactsProvider";
import ContactCard from "../contactCard/ContactCard";
import styles from "./contacts.module.css"

const Contacts = () => {
	const [{ isLoading, data, error }, dispatchContact] = useContext(ContactsContext);
	return (
		<div>
			<div>{isLoading && <h1>Loading...</h1>}</div>
			<div className={styles.contactsContainer}>
				{!!data.length &&
					data.map((contact) => (
						<ContactCard
						    key={contact.id}
							name={contact.name}
							email={contact.email}
							id={contact.id}
							job={contact.job}
						/>
					))}
			</div>
			<div>{!!error && <h1>{error}</h1>}</div>
		</div>
	);
};

export default Contacts;
