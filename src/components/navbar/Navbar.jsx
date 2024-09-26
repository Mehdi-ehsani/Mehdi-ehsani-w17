import React from "react";
import styles from "./navbar.module.css"
import { Link } from "react-router-dom";
import DarkMode from "../darkModeBtn/DarkMode";

const Navbar = () => {


	return (
		<div className={styles.nav}>
			<ul className={styles.navList}>
				<Link to="/">Contacts</Link>
				<Link to="/Add-Contact">Add Contact</Link>
				<DarkMode/>
			</ul>
		</div>
	);
};

export default Navbar;
