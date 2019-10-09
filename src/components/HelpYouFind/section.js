import React from 'react';

import {
	Category,
	CategoryImage,
	CategoryImagePlace,
	CategoryContent,
	CategoryTitle,
} from './styles';

const Section = ({ title, photo }) => {
	return (
		<Category>
			<CategoryImage>
				<CategoryImagePlace source={photo} />
			</CategoryImage>
			<CategoryContent>
				<CategoryTitle>{title}</CategoryTitle>
			</CategoryContent>
		</Category>
	);
};

export default Section;
