import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';
import Search from '../../components/Search';
import HelpYouFind from '../../components/HelpYouFind';
import KeepExplore from '../../components/KeepExplore';

import { Container, FeedList } from './styles';

const Explore = () => {
	return (
		<>
			<Background>
				<Container>
					<Search />
					<FeedList>
						<HelpYouFind />
						<KeepExplore />
					</FeedList>
				</Container>
			</Background>
		</>
	);
};

Explore.navigationOptions = {
	tabBarLabel: 'EXPLORAR',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="search1" size={20} color={tintColor} />
	),
};

export default Explore;
