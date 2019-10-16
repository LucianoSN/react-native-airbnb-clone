import styled from 'styled-components';
import Animated from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../styles/colors.js';

export const Container = styled(Animated.View)`
	flex-direction: row;
	align-items: flex-end;
	z-index: 50;

	position: absolute;
	top: 30px;

	width: 100%;
	padding-left: 20px;

	display: ${props => (!props.display ? 'flex' : 'none')};
	height: ${props => props.tagHeight};

	background-color: ${Colors.bgColor};
	box-shadow: 0 6px 3px rgb(130, 130, 130);
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

export const BoxShadow = styled.View`
	margin-top: 7px;
	height: 20px;
	width: 100%;
	background-color: ${Colors.bgColor};
	box-shadow: 0 6px 3px rgba(130, 130, 130, 0.2);
`;
