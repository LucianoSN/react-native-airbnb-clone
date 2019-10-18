import React, { useState, useEffect } from 'react';
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

const { Extrapolate, call, block, cond, greaterThan } = Animated;
const TAG_HEIGHT = 95;

const Explore = () => {
	const [searchInit, setSearchInit] = useState(false);
	const [scrollY, setScrollY] = useState(new Animated.Value(0));

	const offsetY = new Animated.Value(0);
	const offsetShadow = new Animated.Value(120);

	const diffClampScrollY = Animated.diffClamp(scrollY, 0, TAG_HEIGHT);

	const tagY = Animated.interpolate(diffClampScrollY, {
		inputRange: [0, TAG_HEIGHT],
		outputRange: [0, -TAG_HEIGHT],
		extrapolate: 'clamp',
	});

	const tagYC = Animated.interpolate(diffClampScrollY, {
		inputRange: [0, TAG_HEIGHT],
		outputRange: [0, -(TAG_HEIGHT - 55)],
		extrapolate: 'clamp',
	});

	const opacityY = Animated.interpolate(diffClampScrollY, {
		inputRange: [0, 5, TAG_HEIGHT],
		outputRange: [1, 0.1, 0],
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

	const positionY = cond(greaterThan(scrollY, offsetY), tagY, offsetY);
	const positionYContainer = cond(
		greaterThan(scrollY, offsetY),
		tagYC,
		offsetY
	);

	const opacity = cond(greaterThan(scrollY, offsetY), opacityY, 1);
	const shadow = cond(greaterThan(scrollY, offsetShadow), 0.2, 0);

	const debugTagY = block([
		call([tagY, scrollY, diffClampScrollY, offsetY, shadow], x => {
			console.log(
				'tagY:',
				x[0],
				'scrollY:',
				x[1],
				'diffClamp:',
				x[2],
				'offsetY:',
				x[3],
				'shadow:',
				x[4]
			);
		}),
		cond(greaterThan(scrollY, offsetY), tagY, offsetY),
	]);

	return (
		<Background>
			<Container>
				<Search handleSearch={handleSearchInit}>
					<TagMenu
						display={searchInit}
						tagY={positionY}
						tagYContainer={positionYContainer}
						tagHeight={TAG_HEIGHT}
						opacitY={opacity}
						shadow={shadow}
					/>
				</Search>

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
