import React from 'react';
import { StyleSheet, View } from 'react-native';


// TODO:: find replacement for this package that works on android
// or implement different paging solution.
// import { StackNavigator } from 'react-navigation';

import HomeScreen from './Screens/Home';


 import {
   TabNavigator,
 } from 'react-navigation';

 class MainScreen extends React.Component {
   static navigationOptions = {
     tabBarLabel: 'Home',
   };
   render() {
     const { navigate } = this.props.navigation;
     return (
       <Button
         title="Go to Setup Tab"
         onPress={() => navigate('Setup')}
       />
     );
   }
 }

 class SetupScreen extends React.Component {
   static navigationOptions = {
     tabBarLabel: 'Setup',
   };
   render() {
     const { goBack } = this.props.navigation;
     return (
       <Button
         title="Go back to home tab"
         onPress={() => goBack()}
       />
     );
   }
 }

 const BasicApp = TabNavigator({
   Main: {screen: MainScreen},
   Setup: {screen: SetupScreen},
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

// this is unused due to breaking android
// const MainScreenNavigator = StackNavigator({
//   Home: { screen: HomeScreen },
//   SkillsScreen: { screen: SkillsScreen },
// });

export default () => (
  <View style={styles.container}>
    <BasicApp />
  </View>
);
