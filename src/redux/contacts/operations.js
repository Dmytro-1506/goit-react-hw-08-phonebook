import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('/contacts');
			console.log(response);
			return response.data;
		} catch (e) {
			console.log(e);
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addItem',
	async (newContact, thunkApi) => {
		try {
			const response = await axios.post('/contacts', newContact);
			return response.data;
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteItem',
	async (id, thunkApi) => {
		try {
			const response = await axios.delete(`/contacts/${id}`);
			return {
				id,
				message: response.data.result,
			};
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);
