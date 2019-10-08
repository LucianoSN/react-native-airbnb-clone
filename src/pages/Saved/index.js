import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';

import { Container } from './styles';

const Saved = () => {
	return (
		<Background>
			<Container>
				<Text>Saved</Text>
			</Container>
		</Background>
	);
};

Saved.navigationOptions = {
	tabBarLabel: 'SALVOS',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="hearto" size={20} color={tintColor} />
	),
};

export default Saved;
