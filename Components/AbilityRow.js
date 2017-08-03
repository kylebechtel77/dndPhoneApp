import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import StyleSheet from '../Styles/AbilityRow';
import LabeledNumber from './LabeledNumber';
import Dice from '../utils/dice';
import StatCalculator from '../utils/statCalculator';

const AbilityRow = (props) => {
  const ability = props.ability;
  const mod = StatCalculator.calculateAbilityModifier(ability.score);
  const modPlus = mod >= 0 ? '+' : '';
  const save = mod + (ability.isProficient ? props.proficiencyBonus : 0);
  const savePlus = save >= 0 ? '+' : '';
  const rowStyle = props.last ? StyleSheet.abilityRowLast : StyleSheet.abilityRow;

  return (
    <View style={rowStyle}>
      <LabeledNumber label="SCORE"><Text style={{ fontWeight: 'bold' }}>{ability.score}</Text></LabeledNumber>
      <Text style={StyleSheet.abilityName}>{ability.name}</Text>
      <TouchableOpacity onPress={() => { Dice.alert(Dice.roll(1, 20, mod, `${ability.name} Test`)); }}>
        <View><LabeledNumber label="MOD">{modPlus + mod}</LabeledNumber></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Dice.alert(Dice.roll(1, 20, save, `${ability.name} Save`)); }}>
        <View><LabeledNumber label="SAVE">{savePlus + save}</LabeledNumber></View>
      </TouchableOpacity>
    </View>
  );
};

AbilityRow.propTypes = {
  ability: React.PropTypes.shape({
    score: React.PropTypes.number.isRequired,
    isProficient: React.PropTypes.bool.isRequired,
    name: React.PropTypes.string.isRequired,
  }).isRequired,
  proficiencyBonus: React.PropTypes.number.isRequired,
  last: React.PropTypes.bool,
};
AbilityRow.defaultProps = {
  last: false,
};

export default AbilityRow;
