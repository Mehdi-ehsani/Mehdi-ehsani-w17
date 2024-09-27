import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar.jsx"
import AddContacts from "./components/addContact/AddContacts";
import NotFound from "./components/404/404.jsx";


function App() {
	return (
		<>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/Add-Contact" element={<AddContacts/>} />
					<Route path="*" element={<NotFound/>}/>
				</Routes>
		</>
	);
}

export default App;
