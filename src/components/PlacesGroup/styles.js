import styled from 'styled-components';
import Colors from '../../helpers/colors';

export const Container = styled.View`
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
