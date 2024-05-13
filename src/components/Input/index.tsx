import React, { ChangeEvent, InputHTMLAttributes, ReactElement, useState } from 'react';

import { $Error, $Input, $InputMask, $Label, $Root } from './styles';

type Props = {
	value: string | number;
	onChange: ({ name, value }: { name: string; value: string }) => void;
	name: string;
	type?: string;
	placeholder?: string;
	label?: string | ReactElement;
	error?: string;
	mask?: string;
};

const Input: React.FC<Props> = ({
	type,
	value,
	mask,
	error,
	label,
	onChange,
	placeholder,
	name
}) => {
	const [isFocused, setFocused] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		if (type === 'number') {
			if (/^[1-9]\d*\.?\d*$/.test(inputValue)) {
				onChange({ name: e.target.name, value: inputValue });
			}
		} else {
			onChange({ name: e.target.name, value: inputValue });
		}
	};

	const onFocus = () => {
		setFocused(true);
	};

	const onBlur = () => {
		setFocused(false);
	};

	return (
		<$Root>
			<$Label isShow={isFocused || !!value}>{label}</$Label>
			{mask ? (
				<$InputMask
					error={!!error}
					mask='+7 (999) 999-99-99'
					maskChar=''
					maskPlaceholder={null}
					alwaysShowMask={true}
					type={type}
					name={name}
					value={value}
					onChange={handleChange}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder={!isFocused ? placeholder : ''}
				/>
			) : (
				<$Input
					error={!!error}
					value={value}
					onChange={handleChange}
					onFocus={onFocus}
					onBlur={onBlur}
					type={type}
					inputMode={type === 'number' ? 'numeric' : ''}
					name={name}
					placeholder={!isFocused ? placeholder : ''}
				/>
			)}
			{error && <$Error>{error}</$Error>}
		</$Root>
	);
};

export default Input;
