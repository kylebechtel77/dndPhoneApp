import React from 'react';
import { View, Text, ListView } from 'react-native';

import BaseStyleSheet from '../Styles/Base';
import LabeledNumber from '../Components/LabeledNumber';
import DiceRollButton from '../Components/DiceRollButton';
import Stats from '../utils/stats';
import Layout from '../Components/Layout';

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
    const initiative = Stats.calculateAbilityModifier(this.state.abilities.dex.score);
    const wisdomModifier = Stats.calculateAbilityModifier(this.state.abilities.wis.score);
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
        <Layout.RowDivider />
        <Layout.Row>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <LabeledNumber label="Hit Points">
              {this.state.hitPoints.current}/{this.state.hitPoints.max}
            </LabeledNumber>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <LabeledNumber label="Armor Class">{this.state.armorClass}</LabeledNumber>
          </View>
        </Layout.Row>
        <Layout.RowDivider />
        <Layout.Row>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <LabeledNumber label="Move Speed">{this.state.speed}</LabeledNumber>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <DiceRollButton dice={1} sides={20} modifier={initiative} description="Initiative">
              <LabeledNumber label="Initiative">{Stats.formatModifier(initiative)}</LabeledNumber>
            </DiceRollButton>
          </View>
        </Layout.Row>
        <Layout.RowDivider />
        <Layout.Row>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <LabeledNumber label="Proficiency">
              {Stats.formatModifier(this.state.proficiencyBonus)}
            </LabeledNumber>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <DiceRollButton
              dice={1}
              sides={20}
              modifier={passivePerception}
              description="Passive Perception"
            >
              <LabeledNumber label={'Passive\nPerception'}>{Stats.formatModifier(passivePerception)}</LabeledNumber>
            </DiceRollButton>
          </View>
        </Layout.Row>
      </View>
    );
  }
}
