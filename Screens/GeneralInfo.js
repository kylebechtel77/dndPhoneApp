import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

import BaseStyleSheet from '../Styles/Base';
import StyleSheet from '../Styles/GeneralInfo';
import LabeledNumber from '../Components/LabeledNumber';
import DiceRollButton from '../Components/DiceRollButton';
import Stats from '../utils/stats';
import Layout from '../Components/Layout';

const image = require('../Images/backgroundPortrait.png');

const window = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cohen',
      race: 'Human',
      classes: [
        {
          name: 'Barbarian',
          level: 2,
        },
        {
          name: 'Cleric',
          level: 3,
        },
      ],
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
      <Image source={image} style={{ width: window.width, height: window.height }}>
        <View style={BaseStyleSheet.card}>
          <Text style={StyleSheet.characterNameRow}>{this.state.name}</Text>
          <Text style={StyleSheet.characterLevelRow}>
            Level {this.state.classes.reduce((sum, classData) => sum + classData.level, 0)}
            {` ${this.state.race}`}
          </Text>
          <Layout.Row>
            {
              this.state.classes.map(classData =>
                (<Text key={classData.name} style={StyleSheet.classBlock}>
                  {classData.name} {classData.level}
                </Text>))
            }
          </Layout.Row>
          <Layout.RowDivider />
          <Layout.Row>
            <View style={StyleSheet.infoBlock}>
              <LabeledNumber label="Hit Points">
                {this.state.hitPoints.current}/{this.state.hitPoints.max}
              </LabeledNumber>
            </View>
            <View style={StyleSheet.infoBlock}>
              <LabeledNumber label="Armor Class">{this.state.armorClass}</LabeledNumber>
            </View>
          </Layout.Row>
          <Layout.RowDivider />
          <Layout.Row>
            <View style={StyleSheet.infoBlock}>
              <LabeledNumber label="Move Speed">{this.state.speed}</LabeledNumber>
            </View>
            <View style={StyleSheet.infoBlock}>
              <DiceRollButton dice={1} sides={20} modifier={initiative} description="Initiative">
                <LabeledNumber label="Initiative">{Stats.formatModifier(initiative)}</LabeledNumber>
              </DiceRollButton>
            </View>
          </Layout.Row>
          <Layout.RowDivider />
          <Layout.Row>
            <View style={StyleSheet.infoBlock}>
              <LabeledNumber label="Proficiency">
                {Stats.formatModifier(this.state.proficiencyBonus)}
              </LabeledNumber>
            </View>
            <View style={StyleSheet.infoBlock}>
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
      </Image>
    );
  }
}
