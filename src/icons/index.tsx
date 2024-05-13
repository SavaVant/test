import React from 'react';

export const SuccessIcon = () => {
	return (
		<svg
			width='28'
			height='23'
			viewBox='0 0 28 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M26.9903 1.70186C27.5779 2.45732 27.5526 3.52199 26.9297 4.24865L11.54 22.2033C10.7345 23.1431 9.27745 23.1329 8.48507 22.1821L1.01199 13.2144C0.438847 12.5266 0.484722 11.5153 1.11778 10.8822C1.64463 10.3554 2.44951 10.2248 3.11592 10.558L9.39272 13.6964C9.75932 13.8797 10.2006 13.8207 10.5063 13.5476L24.059 1.43662C24.9286 0.659556 26.2744 0.781327 26.9903 1.70186Z'
				fill='#969BA5'
			/>
		</svg>
	);
};

export const ErrorIcon = () => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M4 4L28 28' stroke='#E64646' strokeWidth='5' strokeLinecap='round' />
			<path d='M28 4L4 28' stroke='#E64646' strokeWidth='5' strokeLinecap='round' />
		</svg>
	);
};
