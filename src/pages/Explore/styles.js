import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components';
import Animated from 'react-native-reanimated';

import Colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
	flex: 1;
	padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight};
`;

export const AvoidHidden = styled.KeyboardAvoidingView.attrs({
	enable: Platform.OS === 'ios',
	behavior: 'padding',
})``;

export const FeedList = styled(Animated.ScrollView).attrs({
	showsVerticalScrollIndicator: false,
})`
	padding-top: 45px;
	z-index: 20;
	background-color: ${Colors.bgColor};
`;

export const Feed = styled.View`
	padding-bottom: 45px;
`;
