import React from 'react';
import { View, ScrollView } from 'react-native';

import AbilityRow from '../Components/AbilityRow';
import BaseStyleSheet from '../Styles/Base';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: { name: 'Strength', score: 8, isProficient: true },
      dex: { name: 'Dexterity', score: 13, isProficient: false },
      con: { name: 'Constitution', score: 8, isProficient: true },
      int: { name: 'Intelligence', score: 16, isProficient: false },
      wis: { name: 'Wisdom', score: 8, isProficient: false },
      cha: { name: 'Charisma', score: 6, isProficient: false },
    };
  }

  render() {
    // this is unused due to breaking android
    // const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={BaseStyleSheet.card}>
          <AbilityRow ability={this.state.str} proficiencyBonus={2} />
          <AbilityRow ability={this.state.dex} proficiencyBonus={2} />
          <AbilityRow ability={this.state.con} proficiencyBonus={2} />
          <AbilityRow ability={this.state.int} proficiencyBonus={2} />
          <AbilityRow ability={this.state.wis} proficiencyBonus={2} />
          <AbilityRow ability={this.state.cha} proficiencyBonus={2} last />
        </View>
      </ScrollView>
    );
  }
}
