import styled from 'styled-components';

export const $Root = styled.button`
	min-height: 56px;
	position: relative;
	display: flex;
	justify-content: center;
	row-gap: 8px;
	padding: 18px;
	background-color: ${({ theme }) => theme.colors.error};
	font-size: 16px;
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	border-radius: 4px;
	outline: none;
	border: none;

	&:hover {
		background-color: #f72f00;
	}

	&:active {
		background-color: #dc2a00;
	}
`;
