import React from 'react';

import { Container, Title, Subtitle } from './styles';

const PlacesGroup = ({ title, subtitle }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
};

export default PlacesGroup;
