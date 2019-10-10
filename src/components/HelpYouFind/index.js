import React from 'react';

import Section from './section';

import { Container, Title, List } from './styles';

const data = [
	{
		title: 'Estadias',
		photo: require('../../assets/image004.jpg'),
	},
	{
		title: 'Experiências',
		photo: require('../../assets/experiences.jpg'),
	},
	{
		title: 'Aventuras',
		photo: require('../../assets/image002.jpg'),
	},
	{
		title: 'Restaurantes',
		photo: require('../../assets/restaurant.jpg'),
	},
];

const HelpYouFind = () => {
	return (
		<Container>
			<Title>O que você deseja encontrar, Stark?</Title>
			<List
				data={data}
				keyExtractor={item => String(item.title)}
				renderItem={({ item }) => (
					<Section title={item.title} photo={item.photo} />
				)}
			/>
		</Container>
	);
};

export default HelpYouFind;
