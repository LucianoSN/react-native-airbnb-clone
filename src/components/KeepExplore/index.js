import React from 'react';
import { Dimensions } from 'react-native';

import { Container, Title, CoverContainer, Cover } from './styles';

const width = Math.round(Dimensions.get('window').width);

const KeepExplore = () => {
	console.log(width);
	return (
		<Container>
			<Title>Continue explorando</Title>
			<CoverContainer wSize={width}>
				<Cover
					source={require('../../assets/deauville_alentours.jpg')}
				/>
			</CoverContainer>
		</Container>
	);
};

export default KeepExplore;
