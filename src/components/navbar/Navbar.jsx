import React from "react";
import styles from "./navbar.module.css"
import { NavLink } from "react-router-dom";
import DarkMode from "../darkModeBtn/DarkMode";

const Navbar = () => {


	return (
		<div className={styles.nav}>
			<ul className={styles.navList}>
				<NavLink to="/">Contacts</NavLink>
				<NavLink to="/Add-Contact">Add Contact</NavLink>
				<DarkMode/>
			</ul>
		</div>
	);
};

export default Navbar;
