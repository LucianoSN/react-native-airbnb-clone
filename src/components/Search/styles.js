import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.View`
	align-items: center;
	justify-content: center;
	height: 80px;
	z-index: 100;
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

	margin: 5px 0 5px 0;
	padding: 5px;

	background-color: ${Colors.white};
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
	placeholderTextColor: Colors.placeHold,
	fontSize: 14,
	fontWeight: 'bold',
	returnKeyType: 'search',
})`
	flex: 2;
	background-color: ${Colors.white};
	padding: 0 10px;
	height: 40px;
`;

export const CancelLink = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;

	color: ${Colors.title};
	padding: 8px;

	display: ${props => (!props.display ? 'none' : 'flex')};
`;

export const CancelText = styled.Text`
	font-size: 16px;
	margin-left: 10px;
`;
