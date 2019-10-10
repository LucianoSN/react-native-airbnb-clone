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
	const padLeft = !(index === 0 || index >= itemsLength);

	return (
		<Container padLeft={padLeft}>
			<Photo source={photo} />
			<Category>{category}</Category>
			<Title>{title}</Title>
			<Price>{`R$ ${price} por pessoa`}</Price>
		</Container>
	);
};

export default EvaluationBox;
