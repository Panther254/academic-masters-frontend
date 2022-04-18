import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL ,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_FAIL
} from '../actions/types';

const initialState = {
	isAuthenticated: false,
	first_name: "",
	last_name: "",
	email: "",
}

export default function(state=initialState,action){
	const { type,payload} = action

	switch(type){
		case REGISTER_SUCCESS:
			return {
				...state,
				isAuthenticated: false
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true
			}

		case LOGOUT_SUCCESS:
			return {
				...state,
				isAuthenticated: false
			}

		case FETCH_PROFILE_SUCCESS:
			return{
				...state,
				first_name: payload.first_name,
				last_name: payload.last_name,
				email: payload.email,
				isAuthenticated: true
			}

		case REGISTER_FAIL:
		case LOGIN_FAIL:
		case LOGOUT_FAIL:
		case FETCH_PROFILE_FAIL:
		default:
			return state
	}
}