import React , {useContext} from 'react'
import {ContactsContext} from "../../context/ContactsProvider"

const Contacts = () => {
  const {isLoading , data , error} = useContext(ContactsContext)
  return (
    <div>
        <div>{isLoading && <h1>Loading...</h1>}</div>
        <div>{!!data.length  && data.map(contact => <p key={contact.id}>{contact.name}</p>)}</div>
        <div>{!!error && <h1>{error}</h1>}</div>
    </div>
  )
}

export default Contacts