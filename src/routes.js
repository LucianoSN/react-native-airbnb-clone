import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Saved from './pages/Saved';
import Trips from './pages/Trips';
import Profile from './pages/Profile';

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
						activeTintColor: '#FF5A5F',
						inactiveTintColor: '#666',
						labelStyle: {
							fontWeight: 'bold',
						},
						style: {
							backgroundColor: '#F3F3F3',
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
