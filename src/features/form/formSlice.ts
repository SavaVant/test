import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormField {
	firstName: string;
	lastName: string;
	mail: string;
	phone: string;
	flatsCount: number;
}

export interface FormState {
	time: string;
	fields: FormField;
	errors: Partial<Record<keyof FormField, string>>;
}

const initialState: FormState = {
	time: '',
	fields: {
		firstName: '',
		lastName: '',
		mail: '',
		phone: '',
		flatsCount: 1
	},
	errors: {
		firstName: '',
		lastName: '',
		mail: '',
		phone: '',
		flatsCount: ''
	}
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFieldValue(
			state,
			action: PayloadAction<{ field: keyof FormField; value: string | number }>
		) {
			const { field, value } = action.payload;
			state.fields[field] = value as never;
		},
		setTime(state, action: PayloadAction<string>) {
			state.time = action.payload;
		},
		resetForm(state) {
			state.fields = {
				firstName: '',
				lastName: '',
				mail: '',
				phone: '',
				flatsCount: 1
			};
			state.errors = {
				firstName: '',
				lastName: '',
				mail: '',
				phone: '',
				flatsCount: ''
			};
		},
		setErrors(state, action: PayloadAction<{ field: keyof FormField; error: string }>) {
			state.errors[action.payload.field] = action.payload.error;
		},
		resetError(state, action: PayloadAction<{ field: keyof FormField }>) {
			state.errors[action.payload.field] = '';
		},
		resetErrorAll(state) {
			state.errors = {
				firstName: '',
				lastName: '',
				mail: '',
				phone: '',
				flatsCount: ''
			};
		}
	}
});

export const { setTime, setFieldValue, setErrors, resetError, resetForm, resetErrorAll } =
	formSlice.actions;

export default formSlice.reducer;
