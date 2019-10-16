import styled from 'styled-components';
import Animated from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../styles/colors.js';

export const Container = styled(Animated.View)`
	flex-direction: row;
	align-items: flex-end;

	position: absolute;
	top: 40px;

	width: 100%;
	padding-left: 20px;

	display: ${props => (!props.display ? 'flex' : 'none')};
	height: ${props => props.tagHeight};

	background-color: ${Colors.bgColor};

	z-index: 50;
`;

export const Button = styled(RectButton)`
	background: transparent;
	min-height: 20px;
	min-width: 40px;

	height: 32px;

	padding: 8px;
	margin: 0 5px 10px 0;

	border-color: ${Colors.lineBorder};
	border-width: 1px;
	border-radius: 3px;
`;

export const Text = styled.Text`
	font-weight: 600;
	color: ${Colors.subTitle};
`;
