import React , {useContext} from 'react'
import { ActiveTabContext } from '../context/ActiveTabProvider'

const Navbar = () => {
  const [activeTab , dispatch] = useContext(ActiveTabContext)  

  return (
    <div>
       <ul>
         <li onClick={() => dispatch("ACTIVE_CONTACTS_TAB")}>Contacts</li>
         <li onClick={() => dispatch("ACTIVE_ADD_CONTACT_TAB")}>Add Contact</li>
       </ul>
    </div>
  )
}

export default Navbar