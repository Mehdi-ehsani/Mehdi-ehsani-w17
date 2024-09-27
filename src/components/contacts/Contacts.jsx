import React, { useContext, useState } from "react";
import { ContactsContext } from "../../context/ContactsProvider";
import ContactCard from "../contactCard/ContactCard";
import styles from "./contacts.module.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import emptyImg from "../../assets/image/empty.png";
import searchImg from "../../assets/image/search.png";

const Contacts = () => {
	const [{ isLoading, data, error }, dispatchContact] =
		useContext(ContactsContext);
	const [selectedIds, setSelectedIds] = useState([]);
	const [showCheckBox, setShowCheckBox] = useState(false);
	const [searchedValue , setSearchedValue] = useState("")
	const [searchedData , setSearchedData] = useState([])
    const searchHandler = (e) => {
     const value = e.target.value.toLowerCase();
	 setSearchedValue(value)
	const filteredData =  data.filter(contact => {
	return	contact.name.toLowerCase().includes(value) ||
		contact.email.toLowerCase().includes(value)
	 })
	console.log(filteredData) 
	setSearchedData(filteredData) 
}
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
		axios
			.all(
				selectedIds.map((id) =>
					axios.delete(`http://localhost:8000/contacts/${id}`)
				)
			)
			.then((res) => console.log("Delete All", res))
			.catch((error) => console.log("Error", error));
		setSelectedIds([]);
	};
	return (
		<div style={{ position: "reletive" }}>
			<div>{isLoading && <Spinner />}</div>
			<div className={styles.btnContainer}>
						{!!data.length && (
						<div className={styles.searchInput}>
							<input value={searchedValue} onChange={searchHandler} />
							<img src={searchImg} alt="icon"/>
						</div>
						)}
				<div className={styles.btnc}>
					<div>
						{selectedIds.length > 0 && (
							<button
								className={styles.deleteAllBtn}
								onClick={deleteSelectedContacts}
							>
								Delete All
							</button>
						)}
					</div>
					<div>
						{!!data.length && (
							<button
								className={styles.selectBtn}
								onClick={() => {
									setShowCheckBox(!showCheckBox);
									setSelectedIds([]);
								}}
							>
								{showCheckBox ? "Deselect All" : "Select All"}
							</button>
						)}
					</div>
				</div>
			</div>
			<div className={styles.contactsContainer}>
				{!!data.length &&
					(searchedValue ? searchedData : data).map((contact) => (
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
			{data.length  === 0 && !error && !isLoading && (		
				<img className={styles.emptyImg} src={emptyImg} />	
			)}
			<div>{!!error && <h1>{error}</h1>}</div>
		</div>
	);
};

export default Contacts;
