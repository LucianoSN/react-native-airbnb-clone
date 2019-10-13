import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '../../components/Background';

import Search from '../../components/Search';
import SearchResult from '../../components/SearchResult';
import TagMenu from '../../components/TagMenu';
import HelpYouFind from '../../components/HelpYouFind';
import KeepExplore from '../../components/KeepExplore';
import Sections from '../../components/Sections';

import { experiences, adventures, wordsPlace } from '../../data/explore';

import { Container, FeedList, AvoidHidden, Feed } from './styles';

const Explore = () => {
	const [searchInit, setSearchInit] = useState(false);

	const handleSearchInit = (init = false) => {
		setSearchInit(init);
	};

	return (
		<Background>
			<Container>
				<Search handleSearch={handleSearchInit} />
				<TagMenu display={searchInit} />

				<FeedList>
					<AvoidHidden>
						<SearchResult display={searchInit} />
					</AvoidHidden>
					<Feed display={searchInit}>
						<HelpYouFind />
						<KeepExplore />
						<Sections data={experiences} />
						<Sections data={adventures} />
						<Sections data={wordsPlace} />
					</Feed>
				</FeedList>
			</Container>
		</Background>
	);
};

Explore.navigationOptions = {
	tabBarLabel: 'EXPLORAR',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="search1" size={20} color={tintColor} />
	),
};

export default Explore;
