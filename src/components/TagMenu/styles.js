import styled from 'styled-components';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../styles/colors.js';

export const Container = styled(Animated.View)`
	flex-direction: row;
	position: relative;

	padding-left: 20px;

	display: ${props => (!props.display ? 'flex' : 'none')};
`;

export const Button = styled(RectButton)`
	background: transparent;
	min-height: 20px;
	min-width: 40px;

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
