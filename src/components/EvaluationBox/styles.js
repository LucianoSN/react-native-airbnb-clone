import styled from 'styled-components';
import Colors from '../../styles/colors';

import StarRating from 'react-native-star-rating';

export const Container = styled.View`
	flex-grow: 1;
	width: 50%;

	margin-top: 20px;

	padding-left: ${props => (props.padLeft ? 5 : 0)};
	padding-right: ${props => (props.padRight ? 5 : 0)};
`;

export const Category = styled.Text`
	color: ${Colors.category};
	margin-top: 10px;
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
`;

export const Title = styled.Text`
	color: ${Colors.title};
	font-weight: bold;
	margin-top: 5px;
`;

export const Price = styled.Text`
	color: ${Colors.subTitle};
	margin-top: 5px;
`;

export const Photo = styled.Image.attrs({
	resizeMode: 'cover',
	borderRadius: 2,
})`
	width: 100%;
	height: 100px;
	background-color: ${Colors.mark};
`;

export const StarContainer = styled.View`
	width: 50px;
	margin-top: 5px;
`;

export const Stars = styled(StarRating).attrs({
	disable: true,
	maxStars: 5,
	starSize: 13,
	fullStar: 'ios-star',
	emptyStar: 'ios-star',
	iconSet: 'Ionicons',
	fullStarColor: Colors.category,
	emptyStarColor: Colors.star,
})``;
