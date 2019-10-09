import styled from 'styled-components';

export const Container = styled.View`
	flex: 1;
	padding: 10px 20px;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: #555;
`;

export const CoverContainer = styled.View`
	width: ${props => parseInt(props.wSize) - 40};
	margin-top: 20px;
	height: 200px;
`;

export const Cover = styled.Image.attrs({
	resizeMode: 'cover',
	borderRadius: 5,
})`
	flex: 1;
	width: 100%;
`;
