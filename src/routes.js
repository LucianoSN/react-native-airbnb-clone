import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Explore from './pages/Explore';

const Routes = () => {
	return createAppContainer(
		createBottomTabNavigator({
			Explore,
		})
	);
};

export default Routes;
