import React from 'react';

import { Dot, LoaderContainer } from './styles';

type LoaderProps = {
	size?: string;
};

const Loader: React.FC<LoaderProps> = () => {
	return (
		<LoaderContainer>
			<Dot delay='0s' />
			<Dot delay='.2s' />
			<Dot delay='.4s' />
		</LoaderContainer>
	);
};

export default Loader;
