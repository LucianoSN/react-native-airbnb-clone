import React from 'react';

import { Container, Title, Price, Category, Photo } from './styles';

const EvaluationBox = ({ title, price, category, photo }) => {
	return (
		<Container>
			<Photo source={photo} />
			<Category>{category}</Category>
			<Title>{title}</Title>
			<Price>{`R$ ${price} por pessoa`}</Price>
		</Container>
	);
};

export default EvaluationBox;
