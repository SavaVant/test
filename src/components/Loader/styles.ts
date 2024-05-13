import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const LoaderContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
`;

export const Dot = styled.div<{ delay: string }>`
	width: 10px;
	height: 10px;
	background-color: white;
	border-radius: 50%;
	margin: 0 5px;
	animation: ${blink} 1s infinite;
	animation-delay: ${props => props.delay};
`;
