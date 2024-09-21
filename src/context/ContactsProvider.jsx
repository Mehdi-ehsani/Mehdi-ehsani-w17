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
  const [contacts , dispatch] = useReducer(reducer , initialState); 
  useEffect(() => {
        fetch("http://localhost:8000/contacts")
           .then(res => res.json())
           .then(data => dispatch({type: "SUCCES" , payload: data}))
           .catch(error => dispatch({type: "FAILED" , payload: error.message}))
  },[]) 

  return (
    <ContactsContext.Provider value={contacts}>
        {children}
    </ContactsContext.Provider>
  )
}

export default ContactsProvider