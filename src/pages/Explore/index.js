import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';
import Search from '../../components/Search';

import { Container } from './styles';

const Explore = () => {
	return (
		<>
			<Background>
				<Container>
					<Search />
					<Text>Explore</Text>
				</Container>
			</Background>
		</>
	);
};

Explore.navigationOptions = {
	tabBarLabel: 'EXPLORAR',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="search1" size={20} color={tintColor} />
	),
};

export default Explore;
