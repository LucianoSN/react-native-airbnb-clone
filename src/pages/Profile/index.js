import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';

import { Container } from './styles';

const Profile = () => {
	return (
		<Background>
			<Container>
				<Text>Profile</Text>
			</Container>
		</Background>
	);
};

Profile.navigationOptions = {
	tabBarLabel: 'PERFIL',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="user" size={20} color={tintColor} />
	),
};

export default Profile;
