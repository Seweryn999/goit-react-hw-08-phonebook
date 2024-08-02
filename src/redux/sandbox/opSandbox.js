import { createAsyncThunk } from '@reduxjs/toolkit';
import mock, { getPromiseData } from '../../js/apiUrl';

export const fetchSandboxToDisplay = createAsyncThunk(
  'sandbox/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getPromiseData(mock.mockApiGet());
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const postSandboxOnList = createAsyncThunk(
  'sandbox/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await getPromiseData(mock.mockApiPost(data));
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const deleteContactSandbox = createAsyncThunk(
  'sandbox/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await getPromiseData(mock.mockApiDelete(id));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
const opSandbox = { fetchSandboxToDisplay, postSandboxOnList, deleteContactSandbox };

export default opSandbox;
