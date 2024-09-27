import React, { useState } from "react";
import ContactCard from "../contactCard/ContactCard";
import styles from "./contacts.module.css";
import Spinner from "../Spinner/Spinner";
import emptyImg from "../../assets/image/empty.png";
import searchImg from "../../assets/image/search.png";


const Contacts = () => {
	const [data , setData] = useState(JSON.parse(localStorage.getItem("contacts")) || [])
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
		const updatedContacts = data.filter(contact => !selectedIds.includes(contact.id));
		localStorage.setItem('contacts', JSON.stringify(updatedContacts));
		dispatchContact({ type: "SUCCESS", payload: updatedContacts });
		setSelectedIds([]);
	};
	return (
		<div style={{ position: "reletive" }}>
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
					(searchedValue ? searchedData : data).map((contact , index) => (
						<ContactCard
							key={index}
							name={contact.name}
							email={contact.email}
							id={contact.id}
							job={contact.job}
							isSelected={selectedIds.includes(contact.id)}
							handleCheckboxChange={handleCheckboxChange}
							showCheckBox={showCheckBox}
							index={index}
						/>
					))}
			</div>
		</div>
	);
};

export default Contacts;
