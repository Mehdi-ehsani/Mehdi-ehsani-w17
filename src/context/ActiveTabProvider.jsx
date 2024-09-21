import {createContext , useReducer } from 'react'

export const ActiveTabContext = createContext();
const initialState = {
    contacts: true,
    addContact: false
}

const reducer = (state , action) => {
    switch(action) {
      case "ACTIVE_ADD_CONTACT_TAB":
          return {contacts: false, addContact: true}
      case "ACTIVE_CONTACTS_TAB":
          return {contacts: true, addContact: false}   
    }
  }
const ActiveTabProvider = ({children}) => {
  const [activeTab , dispatch] = useReducer(reducer , initialState); 

  return (
    <ActiveTabContext.Provider value={[activeTab , dispatch]}>
       {children}
    </ActiveTabContext.Provider>
  )
}

export default ActiveTabProvider