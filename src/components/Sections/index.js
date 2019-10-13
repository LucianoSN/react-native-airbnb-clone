import React from 'react';

import Header from './Header.js';
import EvaluationBox from '../EvaluationBox';

import { Container } from './styles';

const Sections = ({ data }) => {
	return (
		<>
			<Header title={data.title} subtitle={data.subtitle} />
			<Container>
				{data.places.map((item, index) => (
					<EvaluationBox
						key={String(item.title)}
						index={index + 1}
						itemsTotal={data.places.length}
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

export default Sections;
