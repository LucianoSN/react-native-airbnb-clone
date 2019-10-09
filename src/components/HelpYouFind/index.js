import React from 'react';

import Section from './section';

import { Container, Title, List } from './styles';

const data = [
	{
		title: 'Estadias',
		photo: require('../../assets/Le_T_Chalet_living_room_2.jpg'),
	},
	{
		title: 'Experiências',
		photo: require('../../assets/experiences.jpg'),
	},
	{
		title: 'Aventuras',
		photo: require('../../assets/airbnb-luxe-punta-mita-mexico-ABLUX0619.jpg'),
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
