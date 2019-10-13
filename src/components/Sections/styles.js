import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;

	padding: 0 20px;
	margin-bottom: 20px;
`;
export const HeaderContainer = styled.View`
	flex: 1;
	padding: 10px 20px;
	margin-top: 10px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: ${Colors.title};
`;

export const Subtitle = styled.Text`
	color: ${Colors.subTitle};
	margin-top: 10px;
`;
