import React from 'react';

import Section from './section';

import { Container, Title, List } from './styles';

const data = ['Estadias', 'Experiências', 'Aventuras', 'Restaurantes'];

const HelpYouFind = () => {
	return (
		<Container>
			<Title>O que você deseja encontrar, Stark?</Title>
			<List
				data={data}
				keyExtractor={item => String(item)}
				renderItem={({ item }) => <Section title={item} />}
			/>
		</Container>
	);
};

export default HelpYouFind;
