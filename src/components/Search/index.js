import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
	Container,
	FindBox,
	Find,
	IconBox,
	TextFind,
	CancelLink,
	CancelText,
} from './styles';

const Search = () => {
	const [searchDisplay, setSearchDisplay] = useState(false);
	const [searchText, setSearchText] = useState('');

	const handleCancel = () => {
		setSearchDisplay(false);
		setSearchText('');
		Keyboard.dismiss();
	};

	return (
		<Container>
			<FindBox>
				<Find>
					<IconBox display={!searchDisplay}>
						<Icon name="ios-search" size={20} color="#969696" />
					</IconBox>
					<TextFind
						growField={!searchDisplay}
						autoCorrect={false}
						autoCapitalize="none"
						onFocus={() => setSearchDisplay(true)}
						value={searchText}
						onChangeText={setSearchText}
					/>
				</Find>
				<CancelLink display={searchDisplay} onPress={handleCancel}>
					<CancelText>Cancelar</CancelText>
				</CancelLink>
			</FindBox>
		</Container>
	);
};

export default Search;
