import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../helpers/colors';

import { Near, Local } from './styles';

const Locals = ({ iconName, name }) => {
	return (
		<Near>
			<Icon name={iconName} size={20} color={Colors.title} />
			<Local>{name}</Local>
		</Near>
	);
};

export default Locals;
