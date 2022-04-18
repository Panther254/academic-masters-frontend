import axios from 'axios'
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL ,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_FAIL
} from './types';
import Cookies from 'js-cookie'


export const register = (first_name,last_name,email,password,re_password)=> async dispatch => {
	const config = {
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-CSRFToken': Cookies.get('csrftoken')
		}
	}

	const body = JSON.stringify({first_name,last_name,email,password,re_password})

	try{
		const res = await axios.post('http://localhost:8000/users/register',body,config)
		if (res.data.error) {
			dispatch({
				type: REGISTER_FAIL
			})
		} else {
			dispatch({
				type: REGISTER_SUCCESS
			})
		}
	}catch(err){
		dispatch({
			type: REGISTER_FAIL
		})
	}
}

export const login = (email,password) => async dispatch =>{
	const config = {
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-CSRFToken': Cookies.get('csrftoken')
		}
	}

	const body = JSON.stringify({ email, password })

	try{
		const res = await axios.post('http://localhost:8000/users/login',body,config)
		if (res.data.error) {
			dispatch({
				type: LOGIN_FAIL
			})
		} else {
			dispatch({
				type: LOGIN_SUCCESS
			})
		}
	}catch(err){
		dispatch({
			type: LOGIN_FAIL
		})
	}

}

export const logout = () => async dispatch =>{
	const config = {
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-CSRFToken': Cookies.get('csrftoken')
		}
	}

	try{
		const res = await axios.post('http://localhost:8000/users/logout',config)
		if (res.data.error) {
			dispatch({
				type: LOGOUT_FAIL
			})
		} else {
			dispatch({
				type: LOGOUT_SUCCESS
			})
		}
	}catch(err){
		dispatch({
			type: LOGOUT_FAIL
		})
	}

}


export const getProfile = () => async dispatch =>{
	const config = {
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			// 'X-CSRFToken': Cookies.get('csrftoken')
		}
	}

	try{
		const res = await axios.get('http://localhost:8000/users/profile',config)
		if (res.data.email) {
			dispatch({
				type: FETCH_PROFILE_SUCCESS,
				payload: res.data
			})
		} else {
			dispatch({
				type: FETCH_PROFILE_FAIL
			})
		}
	}catch(err){
		dispatch({
			type: FETCH_PROFILE_FAIL
		})
	}

}