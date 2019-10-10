import styled from 'styled-components';
import Colors from '../../helpers/colors';

export const Container = styled.View`
	flex: 1;
	padding: 10px 20px;
	display: ${props => (props.display ? 'flex' : 'none')};
`;

export const Near = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 8px;
`;

export const Local = styled.Text`
	color: ${Colors.title};
	padding-left: 10px;
`;

export const Title = styled.Text`
	color: ${Colors.subTitle};
	font-size: 12px;
	font-weight: bold;

	margin-top: 40px;
	margin-bottom: 20px;
`;
