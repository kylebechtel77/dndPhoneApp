import React from 'react';
import { StyleSheet, View } from 'react-native';

// TODO:: find replacement for this package that works on android
// or implement different paging solution.
// import { StackNavigator } from 'react-navigation';

import HomeScreen from './Screens/Home';

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

// this is unused due to breaking android
// const MainScreenNavigator = StackNavigator({
//   Home: { screen: HomeScreen },
//   SkillsScreen: { screen: SkillsScreen },
// });

export default () => (
  <View style={styles.container}>
    <HomeScreen />
  </View>
);
