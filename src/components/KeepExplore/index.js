import React from 'react';
import { Dimensions } from 'react-native';

import {
	Container,
	Title,
	CoverContainer,
	Cover,
	CoverTitle,
	CoverSubtitle,
} from './styles';

const width = Math.round(Dimensions.get('window').width);

const KeepExplore = () => {
	return (
		<Container>
			<Title>Continue explorando</Title>
			<CoverContainer wSize={width}>
				<Cover source={require('../../assets/image008.jpg')}>
					<CoverTitle>Animais</CoverTitle>
					<CoverSubtitle>Nas experiências do Airbnb</CoverSubtitle>
				</Cover>
			</CoverContainer>
		</Container>
	);
};

export default KeepExplore;
