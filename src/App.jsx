import ContactsProvider from "./context/ContactsProvider";
import ActiveTabProvider  from "./context/ActiveTabProvider";
import Home from "./pages/Home";


function App() {
	return (
		<ContactsProvider>
			<ActiveTabProvider>
				<Home/>
			</ActiveTabProvider>
		</ContactsProvider>
	);
}

export default App;
