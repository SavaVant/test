import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { FormField, resetErrorAll, setErrors, setFieldValue, setTime } from './formSlice';
import {
	$Description,
	$Disclaimer,
	$IconWrapper,
	$InputWrapper,
	$Root,
	$Title,
	$Wrapper
} from './styles';
import { RootState } from '../../app/store';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import { getButtonText, greetUserByTime, validateEmail } from '../../helpers';
import { SuccessIcon, ErrorIcon } from '../../icons';
import { useSubmitFormMutation } from '../../services/form';

const Form = () => {
	const dispatch = useDispatch();
	const formData = useSelector((state: RootState) => state.form);
	const [submit, { isLoading, isSuccess, isError }] = useSubmitFormMutation();

	const handleInputChange = ({ name, value }: { name: string; value: string }) => {
		dispatch(setFieldValue({ field: name as keyof FormField, value }));
	};

	const handleSubmit = () => {
		dispatch(setTime(String(Math.floor(Date.now() / 1000))));
		dispatch(resetErrorAll());

		let hasErrors = false;

		if (formData.fields.mail !== '' && !validateEmail(formData.fields.mail)) {
			dispatch(setErrors({ field: 'mail', error: 'Некорректное значение' }));
			hasErrors = true;
		}

		if (formData.fields.phone.length < 18) {
			dispatch(setErrors({ field: 'phone', error: 'Некорректное значение' }));
			hasErrors = true;
		}

		Object.keys(formData.fields).forEach(key => {
			if (formData.fields[key as never] === '') {
				dispatch(
					setErrors({
						field: key as keyof Omit<FormField, 'time'>,
						error: 'Заполните поле'
					})
				);
				hasErrors = true;
			}
		});

		if (!hasErrors) {
			const transformData = {
				user: {
					firstName: formData.fields.firstName,
					lastName: formData.fields.lastName,
					mail: formData.fields.mail,
					phone: formData.fields.phone
				},
				order: { flatsCount: formData.fields.flatsCount, time: formData.time }
			};
			console.log(transformData);
			submit(transformData);
		}
	};

	if (isSuccess) {
		return (
			<$Root>
				<$IconWrapper>
					<SuccessIcon />
				</$IconWrapper>
				<$Title>Ваша заявка отправлена</$Title>
			</$Root>
		);
	}

	if (isError) {
		return (
			<$Root>
				<$IconWrapper>
					<ErrorIcon />
				</$IconWrapper>
				<$Title>Ошибка. Попробуйте позже</$Title>
			</$Root>
		);
	}

	return (
		<$Root>
			<$Title>{greetUserByTime()}</$Title>
			<$Description>Для бронирования помещений заполните форму</$Description>
			<$Wrapper>
				<$InputWrapper>
					<Input
						type='text'
						name='firstName'
						value={formData.fields.firstName}
						onChange={handleInputChange}
						placeholder='Ваше Имя'
						label='Ваше Имя'
						error={formData.errors.firstName}
					/>
					<Input
						type='text'
						name='lastName'
						value={formData.fields.lastName}
						onChange={handleInputChange}
						placeholder='Фамиллия'
						label='Фамиллия'
						error={formData.errors.lastName}
					/>
				</$InputWrapper>
				<Input
					mask='+7 (999) 999-99-99'
					name='phone'
					value={formData.fields.phone}
					onChange={handleInputChange}
					placeholder='phone'
					label='phone'
					error={formData.errors.phone}
				/>
				<Input
					type='email'
					name='mail'
					value={formData.fields.mail}
					onChange={handleInputChange}
					placeholder='E-mail'
					label='E-mail'
					error={formData.errors.mail}
				/>
				<Input
					type='number'
					name='flatsCount'
					value={formData.fields.flatsCount}
					onChange={handleInputChange}
					placeholder='Количество помещений'
					label='Количество помещений'
					error={formData.errors.flatsCount}
				/>
				<Button onClick={handleSubmit}>
					{isLoading ? <Loader /> : getButtonText(formData.fields.flatsCount)}
				</Button>
				<$Disclaimer>Это дисклеймер, который есть во всех формах</$Disclaimer>
			</$Wrapper>
		</$Root>
	);
};

export default Form;
