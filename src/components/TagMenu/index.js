import React from 'react';

import { Container, Button, Text, BoxShadow } from './styles';

const TagMenu = ({ display, tagY, tagHeight, opacitY, shadow }) => {
	return (
		<>
			<Container
				style={[
					{ transform: [{ translateY: tagY }] },
					{ opacity: opacitY, shadowOpacity: shadow },
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
			<BoxShadow />
		</>
	);
};

export default TagMenu;
