import { createAsyncThunk } from '@reduxjs/toolkit';
import apiv2, { getPromiseData } from 'js/apiv2';

export const fetchContactsToDisplay = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const response = await getPromiseData(apiv2.contApiGet());
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const postContactOnList = createAsyncThunk(
  'contacts/post',
  async (data, thunkAPI) => {
    try {
      const response = await getPromiseData(apiv2.contApiNew(data));
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/:contactId',
  async (id, thunkAPI) => {
    try {
      const response = await getPromiseData(apiv2.contApiDelete(id));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
const opContacts = { fetchContactsToDisplay, postContactOnList, deleteContact };

export default opContacts;
