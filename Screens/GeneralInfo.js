import React from 'react';
import { View, Text, ListView } from 'react-native';

import BaseStyleSheet from '../Styles/Base';
import StatCalculator from '../utils/statCalculator';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const classData = [
      {
        name: 'Barbarian',
        level: 2,
      },
      {
        name: 'Cleric',
        level: 3,
      },
    ];
    this.state = {
      name: 'Cohen',
      race: 'Human',
      classes: ds.cloneWithRows(classData),
      rawClasses: classData,
      hitPoints: {
        current: 28,
        max: 28,
      },
      armorClass: 16,
      speed: 30,
      abilities: {
        dex: { score: 13 },
        wis: { score: 8 },
      },
      proficiencyBonus: 3,
      skills: {
        per: { isProficient: true },
      },
    };
  }

  render() {
    const initiative = StatCalculator.calculateAbilityModifier(this.state.abilities.dex.score);
    const wisdomModifier = StatCalculator.calculateAbilityModifier(this.state.abilities.wis.score);
    const passivePerception = wisdomModifier +
      this.state.skills.per.isProficient ? this.state.proficiencyBonus : 0;
    return (
      <View style={BaseStyleSheet.card}>
        <Text>{this.state.name}</Text>
        <Text>{this.state.race}</Text>
        <ListView
          dataSource={this.state.classes}
          renderRow={classData => <Text>{classData.name} {classData.level}</Text>}
        />
        <Text>
          Level: {this.state.rawClasses.reduce((sum, classData) => sum + classData.level, 0)}
        </Text>
        <Text>HP: {this.state.hitPoints.current}/{this.state.hitPoints.max}</Text>
        <Text>AC: {this.state.armorClass}</Text>
        <Text>Speed: {this.state.speed}</Text>
        <Text>Initiative: {initiative}</Text>
        <Text>Proficiency: {this.state.proficiencyBonus}</Text>
        <Text>Passive Perception: {passivePerception}</Text>
      </View>
    );
  }
}
