import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AbilitiesScreen from './Screens/Abilities';
import SkillsScreen from './Screens/Skills';

 const App = TabNavigator ({
   Abilities: { screen: AbilitiesScreen },
     Skills: { screen: SkillsScreen },
 });

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default () => (
    <App />
);
