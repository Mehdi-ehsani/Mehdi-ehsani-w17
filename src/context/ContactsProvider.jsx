import {createContext , useReducer , useEffect} from 'react'

export const ContactsContext = createContext();
const initialState = {
    isLoading: true,
    data: [],
    error: ""
}
const reducer = (state , action) => {
  switch(action.type) {
    case "SUCCES":
        return {isLoading: false , data: action.payload , error: ""}
    case "FAILED":
        return {isLoading: false , data: [] , error: action.payload}   
  }
}

const ContactsProvider = ({children}) => {
  const [contacts , dispatchContact] = useReducer(reducer , initialState); 
  useEffect(() => {
        fetch("http://localhost:8000/contacts")
           .then(res => res.json())
           .then(data => dispatchContact({type: "SUCCES" , payload: data}))
           .catch(error => dispatchContact({type: "FAILED" , payload: error.message}))
  },[contacts]) 

  return (
    <ContactsContext.Provider value={[contacts , dispatchContact]}>
        {children}
    </ContactsContext.Provider>
  )
}

export default ContactsProvider