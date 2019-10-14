import { Platform } from 'react-native';
import styled from 'styled-components';
import Animated from 'react-native-reanimated';

export const Container = styled.SafeAreaView`
	flex: 1;
`;

export const AvoidHidden = styled.KeyboardAvoidingView.attrs({
	enable: Platform.OS === 'ios',
	behavior: 'padding',
})``;

export const FeedList = styled(Animated.ScrollView).attrs({
	showsVerticalScrollIndicator: false,
})`
	padding-top: 45px;
`;

export const Feed = styled.View`
	display: ${props => (!props.display ? 'flex' : 'none')};
`;
