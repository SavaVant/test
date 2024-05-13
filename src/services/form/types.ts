import { FormField } from '../../features/form/formSlice';

export type SubmitData = {
	user: Omit<FormField, 'flatsCount'>;
	order: { flatsCount: number; time: string };
};
