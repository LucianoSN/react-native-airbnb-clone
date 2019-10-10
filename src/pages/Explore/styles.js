import { Platform } from 'react-native';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
	flex: 1;
`;

export const AvoidHidden = styled.KeyboardAvoidingView.attrs({
	enable: Platform.OS === 'ios',
	behavior: 'padding',
})``;

export const FeedList = styled.ScrollView.attrs({
	scrollEventThrottle: 16,
})``;

export const Feed = styled.View`
	display: ${props => (!props.display ? 'flex' : 'none')};
`;
