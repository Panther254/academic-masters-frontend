import React,{ useState } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import CSRFToken from './CSRFToken.js'
import { connect } from 'react-redux';
import { login } from './actions/auth.js'

const SignIn = ({ isAuthenticated ,login }) => {
	const initialState = {
		email: "",
		password: ""
	}

	const navigate = useNavigate()
	
	const [state, setState] = useState(initialState)
	
	const handleChange = e =>{
		setState(prevState=>{
			return {
				...prevState,
				[e.target.name]:e.target.value
			}
		})
	}

	const signIn = e =>{
		e.preventDefault()
		const { email, password} = state
		login(email,password)
	}
	
	if(isAuthenticated){
		navigate('/')
	}


	return (
		<div className="SignIn">
			<div className="signIn__container">
				<h1>Sign In</h1>
				<form onSubmit={signIn}>
					<CSRFToken />
					<div className="user__info">
						<label>Email:</label>
						<input type="text" name="email" onChange={handleChange} value={state.email} />
					</div>
					<div className="user__info">
						<label>Password:</label>
						<input type="password" name="password" onChange={handleChange} value={state.password} />
					</div>
					<div className="button__container">
						<button className="button">Sign in</button>
					</div>
					<p>Don't have an account? <Link to="/signUp">Click here</Link></p>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated

})

export default connect(mapStateToProps,{ login })(SignIn)