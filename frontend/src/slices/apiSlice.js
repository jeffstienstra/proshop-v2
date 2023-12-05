import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';

// createApi takes an object of endpoint definitions
// and automates creation of the action types and action creators

// The baseQuery field is required and is used to create the base fetch function
// that will be used to send all requests.

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({}),
});