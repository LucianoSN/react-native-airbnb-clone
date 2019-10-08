import styled from 'styled-components';

export const Container = styled.View`
	justify-content: center;
	align-items: center;
	height: 80px;
`;

export const Find = styled.View`
	flex-direction: row;
	padding: 10px;
	background-color: #fff;
	margin: 5px 20px;

	box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const TextFind = styled.TextInput.attrs({
	placeholder: 'Experimente "Los Angeles"',
	placeholderTextColor: '#666',
	fontSize: 14,
	fontWeight: 'bold',
})`
	flex: 1;
	background-color: #fff;
	padding-left: 10px;
`;
