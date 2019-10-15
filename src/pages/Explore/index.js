import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
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

const { Extrapolate, call, block } = Animated;
const TAG_HEIGHT = 85;

const Explore = () => {
	const [searchInit, setSearchInit] = useState(false);

	const scrollY = new Animated.Value(0);
	const diffClampScrollY = Animated.diffClamp(scrollY, 0, TAG_HEIGHT);

	const tagY = Animated.interpolate(diffClampScrollY, {
		inputRange: [0, TAG_HEIGHT],
		outputRange: [0, -TAG_HEIGHT],
		extrapolate: Extrapolate.CLAMP,
	});

	const opacityY = Animated.interpolate(diffClampScrollY, {
		inputRange: [0, 30, TAG_HEIGHT],
		outputRange: [1, 0.8, 0],
		extrapolate: Extrapolate.CLAMP,
	});

	const onScroll = Animated.event(
		[
			{
				nativeEvent: { contentOffset: { y: scrollY } },
			},
		],
		{ useNativeDriver: true }
	);

	const handleSearchInit = (init = false) => {
		setSearchInit(init);
	};

	const debugTagY = block([
		call([tagY, scrollY], x => {
			console.log('tag: ', x[0], 'scroll: ', x[1]);
		}),
		tagY,
	]);

	return (
		<Background>
			<Container>
				<Search handleSearch={handleSearchInit} />
				<TagMenu
					display={searchInit}
					tagY={debugTagY}
					tagHeight={TAG_HEIGHT}
					opacitY={opacityY}
				/>

				<FeedList
					bounces={true}
					scrollEventThrottle={16}
					{...{ onScroll }}
				>
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
