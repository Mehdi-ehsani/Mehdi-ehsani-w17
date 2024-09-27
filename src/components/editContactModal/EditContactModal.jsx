import React , { useReducer ,useState } from 'react'
import styles from "./editContactModal.module.css"

const EditContactModal = ({name , job , email , setIsEditModalOpen , index}) => {
	const [data , setData] = useState(JSON.parse(localStorage.getItem("contacts")) || [])
    const initialState = {
        name: name,
        email: email,
        job: job,
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
                return {
                    ...state,
                    errors: { ...state.errors, [action.field]: action.payload },
                };
            case "SUCCES":
                return initialState;
            default:
                return state;
        }
    };
    
    const [formData, dispatchFormData] = useReducer(reducer, initialState);
	const validate = () => {
		let isValid = true;
		if (!formData.name) {
			dispatchFormData({
				type: "SET_ERROR",
				field: "name",
				payload: "Name is required",
			});
			isValid = false;
		} else {
			dispatchFormData({ type: "SET_ERROR", field: "name", payload: "" });
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email) {
			dispatchFormData({
				type: "SET_ERROR",
				field: "email",
				payload: "Email is required",
			});
			isValid = false;
		} else if (!emailPattern.test(formData.email)) {
			dispatchFormData({
				type: "SET_ERROR",
				field: "email",
				payload: "Enter valid email format",
			});
			isValid = false;
		} else {
			dispatchFormData({ type: "SET_ERROR", field: "email", payload: "" });
		}

		if (!formData.job) {
			dispatchFormData({
				type: "SET_ERROR",
				field: "job",
				payload: "Job is required",
			});
			isValid = false;
		} else {
			dispatchFormData({ type: "SET_ERROR", field: "job", payload: "" });
		}

		return isValid;
	};
	const changeHandler = (event) => {
		const value = event.target.value;
		const name = event.target.name.toUpperCase();
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
		if (validate()) {
			data[index] = formData;
			localStorage.setItem('contacts', JSON.stringify(data));
			setIsEditModalOpen(false);
		}
	};
	return (
        <div className={styles.container} onClick={() => setIsEditModalOpen(false)}>

		<form className={styles.form} onClick={(e) => e.stopPropagation()}>
			<div className={styles.InputContainer}>
			<label className={styles.inputLabel}>Name:</label>
			<input
				type="text"
				name="Name"
				value={formData.name}
				onChange={changeHandler}
				className={styles.input}
			/>
			<p>{formData.errors.name}</p>
			<label className={styles.inputLabel}>Email:</label>
			<input
				type="text"
				name="Email"
				value={formData.email}
				onChange={changeHandler}
				className={styles.input}
			/>
			<p>{formData.errors.email}</p>
			<label className={styles.jobLabel}>Job:</label>
			<div className={styles.radioContainer}>
				<input
				    className={styles.radio}
					type="radio"
					id="Developer"
					name="job"
					value="Developer"
					onChange={changeHandler}
					checked={formData.job === "Developer"}
				/>
				<label htmlFor="Developer" style={formData.job === "Developer" ? {background: "#6439FF40" , color: "#6439FF"}: null}>Developer</label>
				<input
				    className={styles.radio}
					type="radio"
					id="Designer"
					name="job"
					value="Designer"
					onChange={changeHandler}
					checked={formData.job === "Designer"}
				/>
				<label htmlFor="Designer" style={formData.job === "Designer" ? {background: "#6439FF40" , color: "#6439FF"}: null}>Designer</label>
				<input
				    className={styles.radio}
					type="radio"
					id="Manager"
					name="job"
					value="Manager"
					onChange={changeHandler}
					checked={formData.job === "Manager"}
				/>
				<label htmlFor="Manager" style={formData.job === "Manager" ? {background: "#6439FF40" , color: "#6439FF"}: null}>Manager</label>
			</div>
			<p>{formData.errors.job}</p>
			</div>
			<button onClick={addToContacts}>Save</button>
		</form>
        </div>
	);
};

export default EditContactModal