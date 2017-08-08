import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';

import BaseStyleSheet from '../Styles/Base';
import StyleSheet from '../Styles/GeneralInfo';
import LabeledNumber from '../Components/LabeledNumber';
import DiceRollButton from '../Components/DiceRollButton';
import Stats from '../Utils/Stats';
import Layout from '../Components/Layout';
import { levelUp } from '../Actions';

const image = require('../Images/BackgroundPortrait.png');

const window = Dimensions.get('window');

const GeneralInfoScreen = (props) => {
  const { character, levelUpDispatch } = props;
  const initiative = Stats.calculateAbilityModifier(character.abilities.dex.score);
  const wisdomModifier = Stats.calculateAbilityModifier(character.abilities.wis.score);
  const passivePerception = wisdomModifier +
    character.skills.per.isProficient ? character.proficiencyBonus : 0;

  return (
    <Image source={image} style={{ width: window.width, height: window.height }}>
      <View style={BaseStyleSheet.card}>
        <Button
          onPress={() => levelUpDispatch(character.id)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={StyleSheet.characterNameRow}>{character.name}</Text>
        <Text style={StyleSheet.characterLevelRow}>
          Level {character.classes.reduce((sum, classData) => sum + classData.level, 0)}
          {` ${character.race}`}
        </Text>
        <Layout.Row>
          {
            character.classes.map(classData =>
              (<Text key={classData.name} style={StyleSheet.classBlock}>
                {classData.name} {classData.level}
              </Text>))
          }
        </Layout.Row>
        <Layout.RowDivider />
        <Layout.Row>
          <View style={StyleSheet.infoBlock}>
            <LabeledNumber label="Hit Points">
              {character.hitPoints.current}/{character.hitPoints.max}
            </LabeledNumber>
          </View>
          <View style={StyleSheet.infoBlock}>
            <LabeledNumber label="Armor Class">{character.armorClass}</LabeledNumber>
          </View>
        </Layout.Row>
        <Layout.RowDivider />
        <Layout.Row>
          <View style={StyleSheet.infoBlock}>
            <LabeledNumber label="Move Speed">{character.speed}</LabeledNumber>
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
              {Stats.formatModifier(character.proficiencyBonus)}
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
};

GeneralInfoScreen.propTypes = {
  character: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  levelUpDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  character: state.characters[0],
});

const mapDispatchToProps = dispatch => ({
  levelUpDispatch: (id) => {
    dispatch(levelUp(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeneralInfoScreen);
