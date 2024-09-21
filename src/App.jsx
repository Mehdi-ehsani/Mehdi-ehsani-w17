import Navbar from "./components/Navbar";
import ContactsProvider from "./context/ContactsProvider";
import ActiveTabProvider  from "./context/ActiveTabProvider";
import Test from "./Test";
import ActivePage from "./components/ActivePage";

function App() {
	return (
		<ContactsProvider>
			<ActiveTabProvider>
				<Navbar />
				<ActivePage/>
				<Test />
			</ActiveTabProvider>
		</ContactsProvider>
	);
}

export default App;
