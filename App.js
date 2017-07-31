import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.header}>
        <Text>Name: {this.state.name}</Text>
        <View>
          <Text>ABILITIES</Text>
          <AbilityRow ability={this.state.str} />
          <AbilityRow ability={this.state.dex} />
          <AbilityRow ability={this.state.con} />
          <AbilityRow ability={this.state.int} />
          <AbilityRow ability={this.state.wis} />
          <AbilityRow ability={this.state.char} />
          <Button
            onPress={() => navigate('SkillsScreen')}
            title="View Skills"
          />
        </View>
      </View>
    );
  }

}

const MainScreenNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  SkillsScreen: { screen: SkillsScreen },
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
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
    paddingTop: 50
  }
});
