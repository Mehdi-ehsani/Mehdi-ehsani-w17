import { createContext, useReducer, useEffect } from 'react';

export const ContactsContext = createContext();

const initialState = {
    isLoading: true,
    data: [],
    error: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return { isLoading: false, data: action.payload, error: "" };
        case "FAILED":
            return { isLoading: false, data: [], error: action.payload };
        default:
            return state;
    }
};

const ContactsProvider = ({ children }) => {
    const [contacts, dispatchContact] = useReducer(reducer, initialState);

    useEffect(() => {
        try {
            const storedContacts = localStorage.getItem('contacts');
            if (storedContacts) {
                dispatchContact({ type: "SUCCESS", payload: JSON.parse(storedContacts) });
            } else {
                dispatchContact({ type: "SUCCESS", payload: [] });
            }
        } catch (error) {
            dispatchContact({ type: "FAILED", payload: error.message });
        }
    }, []);

    return (
        <ContactsContext.Provider value={[contacts, dispatchContact]}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsProvider;
