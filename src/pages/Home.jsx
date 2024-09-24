import Contacts from "../components/contacts/Contacts";
import styles from "./home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<Contacts/>
		</div>
	);
};

export default Home;
