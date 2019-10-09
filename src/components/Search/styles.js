import styled from 'styled-components';

export const Container = styled.View`
	justify-content: center;
	align-items: center;
	height: 80px;
`;

export const Find = styled.View`
	flex-direction: row;
	padding: 10px 10px 10px 20px;
	background-color: #fff;
	margin: 0 20px 20px 20px;
	border-radius: 4px;

	box-shadow: 0 0 8px rgba(130, 130, 130, 0.3);
`;

export const TextFind = styled.TextInput.attrs({
	placeholder: 'Experimente "Los Angeles"',
	placeholderTextColor: '#969696',
	fontSize: 14,
	fontWeight: 'bold',
	returnKeyType: 'search',
})`
	flex: 1;
	background-color: #fff;
	padding-left: 10px;
`;
