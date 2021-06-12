import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Game from '../../screens/game';
import Settings from '../../screens/settings';
import constants from '../../constants';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: constants.COLORS_WHITE,
        inactiveTintColor: constants.COLORS_DARK,
        activeBackgroundColor: constants.COLORS_MAIN,
        inactiveBackgroundColor: constants.COLORS_WHITE,
        style: {
          borderTopWidth: 0,
          elevation: 0,
          height: constants.TABS_HEIGHT,
        },
        labelStyle: {
          fontSize: 19,
          lineHeight: 22,
          textTransform: 'uppercase',
        },
        tabStyle: {
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Tabs;
