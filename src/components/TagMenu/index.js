import React from 'react';

import { Container, Button, Text } from './styles';

const TagMenu = ({ display }) => {
	return (
		<Container display={display}>
			<Button>
				<Text>Datas</Text>
			</Button>
			<Button>
				<Text>Hóspedes</Text>
			</Button>
		</Container>
	);
};

export default TagMenu;
