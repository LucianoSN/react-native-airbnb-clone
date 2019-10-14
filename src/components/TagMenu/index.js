import React from 'react';

import { Container, Button, Text } from './styles';

const TagMenu = ({ display, tagY, tagHeight, opacitY }) => {
	return (
		<Container
			style={[
				{ transform: [{ translateY: tagY }] },
				{ opacity: opacitY },
			]}
			display={display}
			tagHeight={tagHeight}
		>
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
