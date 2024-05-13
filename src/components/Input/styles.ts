import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const $Root = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	row-gap: 8px;
`;

export const $Label = styled.label<{ isShow: boolean }>`
	position: absolute;
	top: 8px;
	left: 16px;
	font-size: 12px;
	color: ${({ theme }) => theme.colors.darkGrey};
	opacity: ${({ isShow }) => (isShow ? 1 : 0)};

	transition: 0.3s ease opacity;
`;

export const $Input = styled.input<any>`
	width: 100%;
	padding: 16px;
	padding-top: ${({ value }) => (value ? '22px' : '16px')};
	padding-bottom: ${({ value }) => (value ? '10px' : '16px')};
	border-radius: 4px;
	outline: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme, error }) => (error ? theme.colors.red : theme.colors.black)};

	background-color: ${({ theme, error, value }) =>
		error ? theme.colors.lightRed : value ? theme.colors.white : theme.colors.lightGrey};
	border: 1px solid
		${({ theme, error, value }) =>
			error ? theme.colors.error : value ? theme.colors.grey : 'transparent'};

	transition:
		0.3s ease border-color,
		background-color;

	&:focus {
		background-color: ${({ theme, error }) =>
			error ? theme.colors.lightRed : theme.colors.white};
		border: 1px solid ${({ theme, error }) => (error ? theme.colors.error : theme.colors.grey)};
		padding-top: 22px;
		padding-bottom: 10px;
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	& {
		-moz-appearance: textfield;
	}
`;

export const $InputMask = styled(InputMask)<any>`
	width: 100%;
	padding: 16px;
	padding-top: ${({ value }) => (value ? '22px' : '16px')};
	padding-bottom: ${({ value }) => (value ? '10px' : '16px')};
	border-radius: 4px;
	outline: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme, error }) => (error ? theme.colors.red : theme.colors.black)};

	background-color: ${({ theme, error, value }) =>
		error ? theme.colors.lightRed : value ? theme.colors.white : theme.colors.lightGrey};
	border: 1px solid ${({ theme, error }) => (error ? theme.colors.error : 'transparent')};

	transition:
		0.3s ease border-color,
		background-color;

	&:focus {
		background-color: ${({ theme, error }) =>
			error ? theme.colors.lightRed : theme.colors.white};
		border: 1px solid ${({ theme, error }) => (error ? theme.colors.error : theme.colors.grey)};
		padding-top: 22px;
		padding-bottom: 10px;
	}
`;

export const $Error = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.error};
`;
