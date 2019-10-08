import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Explore from './pages/Explore';

const Routes = createAppContainer(
	createSwitchNavigator(
		{
			App: createBottomTabNavigator({
				Explore,
			}),
		},
		{ initialRouteName: 'App' }
	)
);

export default Routes;
