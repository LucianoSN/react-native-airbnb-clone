import React from 'react';

import Locals from './Locals';

import { Container, Title } from './styles';

const SearchResult = ({ display }) => {
	return (
		<Container display={display}>
			<Locals iconName="ios-pin" name="Próximo" />

			<Title>BUSCAS RECENTES</Title>

			<Locals iconName="md-time" name="Austin" />

			<Locals
				iconName="md-time"
				name="Austin - Acomodações do Airbnb Plus"
			/>
		</Container>
	);
};

export default SearchResult;
