import React from 'react';
import { View } from 'react-native';

import AbilityRow from '../Components/AbilityRow';
import BaseStyleSheet from '../Styles/Base';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: { text: 'Strength', val: 8, mod: -1, save: -1 },
      dex: { text: 'Dexterity', val: 13, mod: 1, save: 1 },
      con: { text: 'Constitution', val: 8, mod: -1, save: -1 },
      int: { text: 'Intelligence', val: 16, mod: 3, save: 3 },
      wis: { text: 'Wisdom', val: 8, mod: -1, save: -1 },
      char: { text: 'Charisma', val: 6, mod: -2, save: -2 },
    };
  }

  render() {
    // this is unused due to breaking android
    // const { navigate } = this.props.navigation;
    return (
      <View style={BaseStyleSheet.card}>
        <AbilityRow ability={this.state.str} />
        <AbilityRow ability={this.state.dex} />
        <AbilityRow ability={this.state.con} />
        <AbilityRow ability={this.state.int} />
        <AbilityRow ability={this.state.wis} />
        <AbilityRow ability={this.state.char} />
      </View>
    );
  }
}
