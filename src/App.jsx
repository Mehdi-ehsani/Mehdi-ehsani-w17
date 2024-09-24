import ContactsProvider from "./context/ContactsProvider";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar.jsx"
import AddContacts from "./components/addContact/AddContacts";


function App() {
	return (
		<ContactsProvider>
			
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/Add-Contact" element={<AddContacts/>} />
				</Routes>
		
		</ContactsProvider>
	);
}

export default App;
