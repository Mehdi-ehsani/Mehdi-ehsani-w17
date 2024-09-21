import Navbar from "../components/navbar/Navbar";
import ActivePage from "../components/ActivePage";
import styles from "./home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<ActivePage />
		</div>
	);
};

export default Home;
