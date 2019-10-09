import styled from 'styled-components';

export const Container = styled.View`
	flex: 1;
	padding: 10px 20px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: #555;
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
	width: 150px;

	margin-right: 15px;
	margin-bottom: 10px;

	background-color: #fff;

	border-radius: 4px;
	border-width: 0.5;
	border-color: #ddd;

	box-shadow: 0 0 2px rgba(130, 130, 130, 0.2);
`;

export const CategoryImage = styled.View`
	flex: 2;
	background-color: #f2f2f2;
`;

export const CategoryContent = styled.View`
	flex: 1;
	padding: 10px;
`;

export const CategoryTitle = styled.Text`
	color: #555;
	font-weight: bold;
`;
