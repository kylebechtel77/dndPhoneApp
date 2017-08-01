import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//TODO:: find replacement for this package that works on android
//or implement different paging solution.
//import { TabNavigator } from 'react-navigation';

import AbilityRow from './Components/AbilityRow'
import SkillsScreen from './Screens/Skills'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ivan",
      str: { text: "Strength", val: 8, mod: -1, save: -1},
      dex: { text: "Dexterity", val: 8, mod: -1, save: -1},
      con: { text: "Constitution", val: 8, mod: -1, save: -1},
      int: { text: "Intelligence", val: 8, mod: -1, save: -1},
      wis: { text: "Wisdom", val: 8, mod: -1, save: -1},
      char: { text: "Charisma", val: 8, mod: -1, save: -1}
    };
  }
  static navigationOptions = {
      tabBarLabel: 'Home',
    };

  render() {
    //this is unused due to breaking android
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.header}>
        <Text>Name: {this.state.name}</Text>
        <View style={styles.container}>
          <Text>ABILITIES</Text>
          <AbilityRow ability={this.state.str} />
          <AbilityRow ability={this.state.dex} />
          <AbilityRow ability={this.state.con} />
          <AbilityRow ability={this.state.int} />
          <AbilityRow ability={this.state.wis} />
          <AbilityRow ability={this.state.char} />
          <Button
            title="Skills"
            onPress={() => navigate('SkillsScreen')}
          />
        </View>
      </View>
    );
  }

}

//this is unused due to breaking android
 const MainScreenNavigator = TabNavigator({
   Home: { screen: HomeScreen },
   SkillsScreen: { screen: SkillsScreen },
 });


 import {
   TabNavigator,
 } from 'react-navigation';

 const BasicApp = TabNavigator({
   Main: {screen: MainScreen},
   Setup: {screen: SetupScreen},
 });

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

export default class App extends Component {
  render() {
    return (
      <View>
        <BasicApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  }
});
