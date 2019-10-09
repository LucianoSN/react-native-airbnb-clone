import styled from 'styled-components';

export const Container = styled.View`
	align-items: center;
	justify-content: center;
	height: 80px;
`;

export const FindBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 90%;
`;

export const Find = styled.View`
	flex: 2;
	flex-direction: row;

	align-self: center;
	width: 100%;

	margin: 5px 0 20px 0;
	padding: 5px;

	background-color: #fff;
	border-radius: 4px;

	box-shadow: 0 0 8px rgba(130, 130, 130, 0.3);
`;

export const IconBox = styled.View`
	display: ${props => (!props.display ? 'none' : 'flex')};
	align-items: center;
	justify-content: center;
	padding-left: 10px;
`;

export const TextFind = styled.TextInput.attrs({
	placeholder: 'Experimente "Los Angeles"',
	placeholderTextColor: '#969696',
	fontSize: 14,
	fontWeight: 'bold',
	returnKeyType: 'search',
})`
	flex: 2;
	background-color: #fff;
	padding: 0 10px;
	height: 40px;
`;

export const CancelLink = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;

	color: #999;
	padding-left: 10px;
	margin-bottom: 15px;
	display: ${props => (!props.display ? 'none' : 'flex')};
`;

export const CancelText = styled.Text`
	font-size: 16px;
`;
