import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const Index = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
			<Routes />
		</>
	);
};

export default Index;
