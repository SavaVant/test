import { configureStore } from '@reduxjs/toolkit';

import formReducer from '../features/form/formSlice';
import { formApi } from '../services/form';
import { sliderApi } from '../services/slider';

export const store = configureStore({
	reducer: {
		form: formReducer,
		[sliderApi.reducerPath]: sliderApi.reducer,
		[formApi.reducerPath]: formApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sliderApi.middleware, formApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
