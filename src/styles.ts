import styled from 'styled-components';

export const $Wrapper = styled.div<{ imageUrl: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${props => props.imageUrl});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100vh;
`;
