import React from 'react';
import { TabNavigator } from 'react-navigation';

import BaseStyleSheet from './Styles/Base';
import AbilitiesScreen from './Screens/Abilities';
import SkillsScreen from './Screens/Skills';

const App = TabNavigator({
  Abilities: { screen: AbilitiesScreen },
  Skills: { screen: SkillsScreen },
}, {
  tabBarOptions: {
    style: BaseStyleSheet.tabBar,
  },
});

export default () => (
  <App />
);
