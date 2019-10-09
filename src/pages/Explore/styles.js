import styled from 'styled-components';

export const Container = styled.SafeAreaView`
	flex: 1;
`;

export const FeedList = styled.ScrollView.attrs({
	scrollEventThrottle: 16,
})``;
