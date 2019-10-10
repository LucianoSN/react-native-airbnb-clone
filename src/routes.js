import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Saved from './pages/Saved';
import Trips from './pages/Trips';
import Profile from './pages/Profile';

import Colors from './helpers/colors';

const Routes = createAppContainer(
	createSwitchNavigator(
		{
			App: createBottomTabNavigator(
				{
					Explore,
					Saved,
					Trips,
					Messages,
					Profile,
				},
				{
					tabBarOptions: {
						activeTintColor: Colors.company,
						inactiveTintColor: Colors.inactiveColor,
						labelStyle: {
							fontWeight: 'bold',
						},
						style: {
							backgroundColor: Colors.bgBottom,
							padding: 5,
						},
					},
				}
			),
		},
		{ initialRouteName: 'App' }
	)
);

export default Routes;
