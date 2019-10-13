import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.View`
	flex: 1;
	padding: 10px 20px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: ${Colors.title};
`;

export const List = styled.FlatList.attrs({
	showsHorizontalScrollIndicator: false,
	horizontal: true,
	contentContainerStyle: {
		height: 140,
		marginTop: 20,
	},
})``;

export const Category = styled.View`
	flex: 1;
	height: 130px;
	width: 140px;

	margin-right: 15px;
	margin-bottom: 10px;

	background-color: ${Colors.white};

	border-radius: 5px;
	border-width: 0.5;
	border-color: ${Colors.lineBorder};

	box-shadow: 0 0 2px rgba(130, 130, 130, 0.2);
`;

export const CategoryImage = styled.View`
	flex: 2;
	background-color: ${Colors.mark};
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	overflow: hidden;
`;

export const CategoryImagePlace = styled.Image.attrs({
	resizeMode: 'cover',
})`
	flex: 1;
	width: 100%;
`;

export const CategoryContent = styled.View`
	flex: 1;
	padding: 10px;
`;

export const CategoryTitle = styled.Text`
	color: ${Colors.subTitle};
	font-weight: bold;
`;
