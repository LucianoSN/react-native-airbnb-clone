import React from 'react';
import { Dimensions } from 'react-native';

import {
	Container,
	Title,
	CoverContainer,
	Cover,
	CoverPresent,
	CoverTitle,
	CoverSubtitle,
	CoverButton,
	CoverButtonText,
} from './styles';

const width = Math.round(Dimensions.get('window').width);

const KeepExplore = () => {
	return (
		<Container>
			<Title>Continue explorando</Title>
			<CoverContainer wSize={width}>
				<Cover source={require('../../assets/image009.jpg')}>
					<CoverPresent>APRESENTAMOS</CoverPresent>
					<CoverTitle>O mar</CoverTitle>
					<CoverSubtitle>Nas experiências do Airbnb</CoverSubtitle>
					<CoverButton>
						<CoverButtonText>Saiba mais</CoverButtonText>
					</CoverButton>
				</Cover>
			</CoverContainer>
		</Container>
	);
};

export default KeepExplore;
