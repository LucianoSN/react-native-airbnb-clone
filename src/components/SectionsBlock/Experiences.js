import React from 'react';

import Header from './Header';
import EvaluationBox from '../EvaluationBox';

import { Container } from './styles';

const data = [
	{
		title: 'Terraços, drinques e carro conversível',
		price: 292,
		category: 'Passeio de carro - Havana',
		photo: require('../../assets/image005.jpg'),
		stars: 4,
	},
	{
		title: 'Noite, comidas e bosques do Lago de Como',
		price: 139,
		category: 'Caminhada guiada - Milão',
		photo: require('../../assets/image006.jpg'),
		stars: 2,
	},
	{
		title: 'Descubra Colomitos e participe de caminhadas',
		price: 135,
		category: 'Caminhada ecológica - Porto',
		photo: require('../../assets/image007.jpg'),
		stars: 5,
	},
];

const BlockExperiences = () => {
	return (
		<>
			<Header
				title="Experiências com avaliações excelentes"
				subtitle="Reserve atividades guiadas por anfitriões locais em sua próxima viagem"
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
					/>
				))}
			</Container>
		</>
	);
};

export default BlockExperiences;
