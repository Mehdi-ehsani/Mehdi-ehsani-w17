import React, { useContext } from "react";
import { ActiveTabContext } from "../../context/ActiveTabProvider";
import styles from "./navbar.module.css"

const Navbar = () => {
	const [activeTab, dispatch] = useContext(ActiveTabContext);

	return (
		<div className={styles.nav}>
			<ul className={styles.navList}>
				<li style={activeTab.contacts ? {color: "#6439FF"} : {color: "#222"}}   onClick={() => dispatch("ACTIVE_CONTACTS_TAB")}>Contacts</li>
				<li style={activeTab.addContact ? {color: "#6439FF"} : {color: "#222"}} onClick={() => dispatch("ACTIVE_ADD_CONTACT_TAB")}>Add Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
