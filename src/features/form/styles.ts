import styled from 'styled-components';

import { breakpoints } from '../../constants';

export const $Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 544px;
	min-height: 662px;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 56px;
	padding-bottom: 32px;
	border-radius: 8px;

	@media screen and (max-width: ${breakpoints.sm}px) {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

export const $Title = styled.h1`
	margin-bottom: 16px;
	font-size: 44px;
	line-height: 48px;
	font-weight: 600;
	text-align: center;

	@media screen and (max-width: ${breakpoints.sm}px) {
		font-size: 32px;
		line-height: 42px;
	}
`;

export const $Description = styled.p`
	width: 270px;
	margin-bottom: 32px;
	text-align: center;
`;

export const $Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 24px;
`;

export const $InputWrapper = styled.div`
	width: 100%;
	display: flex;
	column-gap: 16px;

	@media screen and (max-width: ${breakpoints.sm}px) {
		flex-direction: column;
		row-gap: 24px;
	}
`;

export const $IconWrapper = styled.div<{ error?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 72px;
	height: 72px;
	margin-bottom: 34px;
	border-radius: 16px;
	background-color: ${({ theme, error }) =>
		error ? theme.colors.lightRed : theme.colors.lightGrey};
`;

export const $Disclaimer = styled.p`
	font-size: 12px;
	color: ${({ theme }) => theme.colors.darkGrey};
	text-align: center;
`;
