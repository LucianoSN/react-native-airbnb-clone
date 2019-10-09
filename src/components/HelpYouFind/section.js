import React from 'react';
import { Text } from 'react-native';

import {
	Category,
	CategoryImage,
	CategoryContent,
	CategoryTitle,
} from './styles';

const Section = ({ title }) => {
	return (
		<Category>
			<CategoryImage />
			<CategoryContent>
				<CategoryTitle>{title}</CategoryTitle>
			</CategoryContent>
		</Category>
	);
};

export default Section;
