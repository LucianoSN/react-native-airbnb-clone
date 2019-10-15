import React, { useState, useRef, useEffect } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../styles/colors';

import {
	Container,
	FindBox,
	Find,
	IconBox,
	TextFind,
	CancelLink,
	CancelText,
} from './styles';

const Search = ({ shadow, handleSearch }) => {
	const searchRef = useRef();

	const [searchDisplay, setSearchDisplay] = useState(false);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		handleSearch(searchDisplay);
	}, [searchDisplay]);

	const clearText = () => {
		setSearchDisplay(false);
		setSearchText('');
		Keyboard.dismiss();
	};

	const handleCancel = () => {
		clearText();
	};

	const handleSubmit = () => {};

	return (
		<Container shadowValue={shadow}>
			<FindBox>
				<Find>
					<IconBox display={!searchDisplay}>
						<Icon name="ios-search" size={20} color={Colors.icon} />
					</IconBox>
					<TextFind
						ref={searchRef}
						growField={!searchDisplay}
						autoCorrect={false}
						autoCapitalize="none"
						onFocus={() => setSearchDisplay(true)}
						value={searchText}
						onChangeText={setSearchText}
						onSubmitEditing={handleSubmit}
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
