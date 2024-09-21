import ContactsProvider from "./context/ContactsProvider"
import Test from "./Test"


function App() {
  return (
    <ContactsProvider>
     <Test/>
    </ContactsProvider>
  )
}

export default App
