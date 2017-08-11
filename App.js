import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BaseStyleSheet from './Styles/Base';
import GeneralInfo from './Screens/GeneralInfo';
import AbilitiesScreen from './Screens/Abilities';
import SkillsScreen from './Screens/Skills';
import DescriptionScreen from './Screens/Description';
import dndApp from './Reducers/Reducer';

const store = createStore(dndApp);

const App = TabNavigator(
  {
    'General Info': { screen: GeneralInfo },
    Abilities: { screen: AbilitiesScreen },
    Skills: { screen: SkillsScreen },
    Descriptions: { screen: DescriptionScreen },
  },
  {
    tabBarOptions: {
      style: BaseStyleSheet.tabBar,
    },
  },
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
