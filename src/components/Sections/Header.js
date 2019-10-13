import React from 'react';

import { HeaderContainer, Title, Subtitle } from './styles';

const Header = ({ title, subtitle }) => {
	return (
		<HeaderContainer>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</HeaderContainer>
	);
};

export default Header;
