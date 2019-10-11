import React from 'react';

import Header from './Header';
import EvaluationBox from '../EvaluationBox';

import { Container } from './styles';

const data = [
	{
		title: 'Andando com elefantes - 4 dias/3 noites',
		price: 2.449,
		category: 'Viagem de 4 dias - Chiang Mai',
		photo: require('../../assets/image009.jpg'),
		stars: 5,
	},
	{
		title: 'Viagem nômade pela Mongólia',
		price: 5.128,
		category: 'Viagem de 5 dias - Ulanbaatair',
		photo: require('../../assets/image010.jpg'),
		stars: 3,
	},
	{
		title: 'Northern Lights Hiking with Overnight',
		price: 871,
		category: 'Viagem noturna - Tromsoe',
		photo: require('../../assets/image011.jpg'),
		stars: 5,
	},
	{
		title: 'Passeio a cavalo na natureza espanhola',
		price: 1.83,
		category: 'Viagem de 3 dias - Málaga',
		photo: require('../../assets/image012.jpg'),
		stars: 4,
	},
];

const BlockAdventures = () => {
	return (
		<>
			<Header
				title="Apresentamos as Aventuras Airbnb"
				subtitle="Viagens de vários dias lideradas por especialistas locais, com atividades, refeições e estadias inclusas"
			/>
			<Container>
				{data.map((item, index) => (
					<EvaluationBox
						key={String(item.title)}
						index={index + 1}
						itemsLength={data.length}
						title={item.title}
						price={item.price}
						category={item.category}
						photo={item.photo}
						starsRating={item.stars}
					/>
				))}
			</Container>
		</>
	);
};

export default BlockAdventures;
