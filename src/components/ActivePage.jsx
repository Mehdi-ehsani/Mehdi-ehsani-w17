import React , {useContext} from 'react'
import { ActiveTabContext } from '../context/ActiveTabProvider'
import Contacts from "./contacts/Contacts"
import AddContact from "./addContact/AddContacts"


const ActivePage = () => {
  const [activeTab , dispatch] = useContext(ActiveTabContext)  
  return (
    <div>
       {activeTab.contacts  && <Contacts/>}
       {activeTab.addContact  && <AddContact/>}
    </div>
  )
}

export default ActivePage