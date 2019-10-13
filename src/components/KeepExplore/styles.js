import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
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
	border-radius: 8px;
`;

export const Cover = styled.ImageBackground.attrs({
	resizeMode: 'cover',
	borderRadius: 10,
})`
	flex: 1;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	padding: 30px;
`;

export const CoverPresent = styled.Text`
	font-size: 12px;
	font-weight: 700;
	color: ${Colors.white};
	margin-bottom: 15px;
`;

export const CoverTitle = styled.Text`
	font-size: 26px;
	font-weight: 500;
	color: ${Colors.white};
	margin-bottom: 15px;
`;

export const CoverSubtitle = styled.Text`
	font-size: 16px;
	color: ${Colors.white};
	margin-bottom: 18px;
`;

export const CoverButton = styled(RectButton)`
	background: ${Colors.white};
	min-height: 20px;
	min-width: 60px;

	padding: 10px 15px;
	border-radius: 4px;
`;

export const CoverButtonText = styled.Text`
	font-size: 14px;
	font-weight: 600;
	color: ${Colors.subTitle};
`;
