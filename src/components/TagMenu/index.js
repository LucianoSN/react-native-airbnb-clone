import React from 'react';

import { Container, ButtonGroup, Button, Text } from './styles';

const TagMenu = ({
	display,
	tagY,
	tagYContainer,
	tagHeight,
	opacitY,
	shadow,
}) => {
	return (
		<>
			<Container
				style={[
					{ transform: [{ translateY: tagYContainer }] },
					{ shadowOpacity: shadow },
				]}
				display={display}
				tagHeight={tagHeight}
			>
				<ButtonGroup
					style={[
						{ transform: [{ translateY: tagY }] },
						{ opacity: opacitY },
					]}
				>
					<Button>
						<Text>Datas</Text>
					</Button>
					<Button>
						<Text>Hóspedes</Text>
					</Button>
				</ButtonGroup>
			</Container>
		</>
	);
};

export default TagMenu;
