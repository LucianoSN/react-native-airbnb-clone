import React from 'react';

import { Container, Title, Price, Category, Photo } from './styles';

const EvaluationBox = ({
	index,
	itemsLength,
	title,
	price,
	category,
	photo,
}) => {
	let hasRest = index % 2 === 0;

	let padLeft = hasRest;
	let padRight = !hasRest;

	if (index === itemsLength && !hasRest) {
		padLeft = false;
		padRight = false;
	}

	return (
		<Container padLeft={padLeft} padRight={padRight}>
			<Photo source={photo} />
			<Category>{category}</Category>
			<Title>{title}</Title>
			<Price>{`R$ ${price} por pessoa`}</Price>
		</Container>
	);
};

export default EvaluationBox;
