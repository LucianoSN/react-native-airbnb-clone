import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Find, TextFind } from './styles';

const Search = () => {
	return (
		<Container>
			<Find>
				<Icon name="ios-search" size={20} color="#969696" />
				<TextFind autoCorrect={false} autoCapitalize="none" />
			</Find>
		</Container>
	);
};

export default Search;
