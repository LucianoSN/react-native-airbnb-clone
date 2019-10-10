import styled from 'styled-components';
import Colors from '../../helpers/colors';

export const Container = styled.View`
	flex-grow: 1;
	width: 140px;
	
	padding: 0 5px;
	margin-top: 20px;
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
