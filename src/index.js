import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const Index = () => {
	return (
		<>
			<StatusBar barStyle="#333" backgroundColor="#fff" />
			<Routes />
		</>
	);
};

export default Index;
