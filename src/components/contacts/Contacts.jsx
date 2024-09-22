import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactsProvider";
import ContactCard from "../contactCard/ContactCard";

const Contacts = () => {
	const { isLoading, data, error } = useContext(ContactsContext);
	return (
		<div>
			<div>{isLoading && <h1>Loading...</h1>}</div>
			<div>
				{!!data.length &&
					data.map((contact) => (
						<ContactCard
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
