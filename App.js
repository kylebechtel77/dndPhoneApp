import React from 'react';
import { TabNavigator } from 'react-navigation';

import AbilitiesScreen from './Screens/Abilities';
import SkillsScreen from './Screens/Skills';
import BaseStyleSheet from './Styles/styles';

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
