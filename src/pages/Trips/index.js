import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';

import { Container } from './styles';

const Trips = () => {
	return (
		<Background>
			<Container>
				<Text>Viagens</Text>
			</Container>
		</Background>
	);
};

Trips.navigationOptions = {
	tabBarLabel: 'VIAGENS',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="enviromento" size={20} color={tintColor} />
	),
};

export default Trips;
