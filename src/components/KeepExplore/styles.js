import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.View`
	flex: 1;
	padding: 10px 20px;
	margin-bottom: 20px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: ${Colors.title};
`;

export const CoverContainer = styled.View`
	width: ${props => parseInt(props.wSize) - 40};
	margin-top: 20px;
	height: 400px;
	background-color: ${Colors.mark};
	border-radius: 5px;
`;

export const Cover = styled.ImageBackground.attrs({
	resizeMode: 'cover',
	borderRadius: 10,
})`
	flex: 1;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	padding: 40px;
`;

export const CoverTitle = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: ${Colors.white};
	margin-bottom: 10px;
`;

export const CoverSubtitle = styled.Text`
	font-size: 16px;
	color: ${Colors.white};
`;
