import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Loader from './components/Loader';
import Form from './features/form';
import { getRandomObject } from './helpers';
import { useBreakpoint } from './hooks/useBreakpoint';
import { useGetSliderQuery } from './services/slider';
import { $Wrapper } from './styles';
import GlobalStyles from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
	const { data, isLoading, isSuccess } = useGetSliderQuery();
	const [mainBackground, setMainBackground] = useState<string>('');

	const smUp = useBreakpoint('sm', 'up');

	useEffect(() => {
		if (isSuccess) {
			const backgroundData = getRandomObject(data);
			if (smUp) {
				setMainBackground(backgroundData.desktop);
			} else {
				setMainBackground(backgroundData.mobile);
			}
		}
	}, [isSuccess, smUp]);

	if (isLoading) return <Loader />;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<$Wrapper imageUrl={mainBackground}>
				<Form />
			</$Wrapper>
		</ThemeProvider>
	);
}

export default App;
