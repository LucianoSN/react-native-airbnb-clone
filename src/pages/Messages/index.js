import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';

import { Container } from './styles';

const Messages = () => {
	return (
		<Background>
			<Container>
				<Text>Messages</Text>
			</Container>
		</Background>
	);
};

Messages.navigationOptions = {
	tabBarLabel: 'MENSAGENS',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="message1" size={20} color={tintColor} />
	),
};

export default Messages;
