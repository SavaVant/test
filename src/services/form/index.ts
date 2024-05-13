import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SubmitData } from './types';
import { FormState } from '../../features/form/formSlice';

export const formApi = createApi({
	reducerPath: 'formApi',
	baseQuery: fetchBaseQuery({
		baseUrl: ' https://strapi.pik.ru'
	}),
	endpoints: builder => ({
		submitForm: builder.mutation<any, SubmitData>({
			query: body => ({
				url: 'front-tests',
				method: 'POST',
				body
			})
		})
	})
});

export const { useSubmitFormMutation } = formApi;
