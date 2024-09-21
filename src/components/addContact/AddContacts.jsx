import React, { useReducer } from "react";

const initialState = {
	name: "",
	email: "",
	job: "",
	errors: {
		name: "",
		email: "",
		job: "",
	},
};
const reducer = (state, action) => {
	switch (action.type) {
		case "NAME":
			return { ...state, name: action.payload };
		case "EMAIL":
			return { ...state, email: action.payload };
		case "JOB":
			return { ...state, job: action.payload };
		case "SET_ERROR":
			return {...state,errors: { ...state.errors, [action.field]: action.payload },};
    case "SUCCES":
      return initialState
		default:
			return state;
	}
};


const AddContacts = () => {
	const [formData, dispatchFormData] = useReducer(reducer, initialState);

  const validate = () => {
    let isValid = true;
    if (!formData.name) {
      dispatchFormData({ type: "SET_ERROR", field: "name", payload: "Name is required" });
      isValid = false;
    } else {
      dispatchFormData({ type: "SET_ERROR", field: "name", payload: "" });
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      dispatchFormData({ type: "SET_ERROR", field: "email", payload: "Email is required" });
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      dispatchFormData({ type: "SET_ERROR", field: "email", payload: "Enter valid email format" });
      isValid = false;
    } else {
      dispatchFormData({ type: "SET_ERROR", field: "email", payload: "" });
    }
  
    if (!formData.job) {
      dispatchFormData({ type: "SET_ERROR", field: "job", payload: "Job is required" });
      isValid = false;
    } else {
      dispatchFormData({ type: "SET_ERROR", field: "job", payload: "" });
    }
  
    return isValid;
  };
	const changeHandler = (event) => {
		const value = event.target.value;
		const name = event.target.id.toUpperCase();
		switch (name) {
			case "NAME":
				dispatchFormData({ type: "NAME", payload: value });
				break;
			case "EMAIL":
				dispatchFormData({ type: "EMAIL", payload: value });
				break;
			case "JOB":
				dispatchFormData({ type: "JOB", payload: value });
		}
	};
	const addToContacts = (event) => {
		event.preventDefault();
    if(validate()) {
      fetch("http://localhost:8000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {console.log("Success:", data); dispatchFormData({type:"SUCCES" , payload: ""}) })
        .catch((error) => console.error("Error:", error));
      
    }
	};
	return (
		<form>
			<label>Name:</label>
			<input type="text" id="Name" value={formData.name} onChange={changeHandler} />
      <p>{formData.errors.name}</p>
			<label>Email:</label>
			<input type="text" id="Email" value={formData.email} onChange={changeHandler} />
      <p>{formData.errors.email}</p>
			<label>Job:</label>
			<input type="text" id="Job" value={formData.job} onChange={changeHandler} />
      <p>{formData.errors.job}</p>
			<button onClick={addToContacts}>Add Contact</button>
		</form>
	);
};

export default AddContacts;
