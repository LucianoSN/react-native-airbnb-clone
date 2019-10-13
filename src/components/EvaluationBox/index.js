import React from 'react';

import {
	Container,
	Title,
	Price,
	Category,
	Photo,
	StarContainer,
	Stars,
} from './styles';

const EvaluationBox = ({
	index,
	itemsTotal,
	title,
	price,
	category,
	photo,
	starsRating,
}) => {
	let hasRest = index % 2 === 0;

	let padLeft = hasRest;
	let padRight = !hasRest;

	if (index === itemsTotal && !hasRest) {
		padLeft = false;
		padRight = false;
	}

	return (
		<Container padLeft={padLeft} padRight={padRight}>
			<Photo source={photo} />
			<Category>{category}</Category>
			<Title>{title}</Title>
			<Price>{`R$ ${price} por pessoa`}</Price>

			<StarContainer>
				<Stars rating={starsRating} />
			</StarContainer>
		</Container>
	);
};

export default EvaluationBox;
