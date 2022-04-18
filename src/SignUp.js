import React,{ useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { register } from './actions/auth.js'
import { connect } from 'react-redux'
import CSRFToken from './CSRFToken.js'


const SignUp = ({ register }) => {
	const navigate = useNavigate()
	const initialState = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		re_password: ""
	}
	
	const [state, setState] = useState(initialState)
	const [accountCreated, setAccountCreated] = useState(false)
	
	const handleChange = e =>{
		setState(prevState=>{
			return {
				...prevState,
				[e.target.name]:e.target.value
			}
		})
	}

	const signUp = e =>{
		e.preventDefault()
		const { first_name, last_name, email, password, re_password} = state
		register(first_name,last_name,email,password,re_password)
		setAccountCreated(true)

	}

	if(accountCreated){
		navigate("/signIn")
	}

	return (
		<div className="SignUp">
			<div className="signUp__container">
				<h1>Sign Up</h1>
				<form onSubmit={signUp}>
					<CSRFToken />
					<div className="user__info">
						<label>First name:</label>
						<input type="text" name="first_name" onChange={handleChange} value={state.first_name} />
					</div>
					<div className="user__info">
						<label>Last name:</label>
						<input type="text" name="last_name" onChange={handleChange} value={state.last_name} />
					</div>
					<div className="user__info">
						<label>Email:</label>
						<input type="text" name="email" onChange={handleChange} value={state.email} />
					</div>
					<div className="user__info">
						<label>Password:</label>
						<input type="password" name="password" onChange={handleChange} value={state.password} />
					</div>
					<div className="user__info">
						<label>Confirm password:</label>
						<input type="password" name="re_password" onChange={handleChange} value={state.re_password} />
					</div>
					<div className="button__container">
						<button className="button">Sign up</button>
					</div>
				</form>
				<p>Already have an account? <Link to="/signin">Click here</Link></p>
			</div>
		</div>
	)
}

export default connect(null, {register})(SignUp)