import React from 'react';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/AbilityRow';
import LabeledNumber from './LabeledNumber';

const AbilityRow = (props) => {
  const ability = props.ability;
  const modPlus = ability.mod >= 0 ? '+' : '';
  const savePlus = ability.save >= 0 ? '+' : '';
  return (
    <View style={StyleSheet.abilityRow}>
      <LabeledNumber label="SCORE">{ability.val}</LabeledNumber>
      <Text style={StyleSheet.abilityName}>{ability.text}</Text>
      <LabeledNumber label="MOD">{modPlus + ability.mod}</LabeledNumber>
      <LabeledNumber label="SAVE">{savePlus + ability.save}</LabeledNumber>
    </View>
  );
};

AbilityRow.propTypes = {
  ability: React.PropTypes.shape({
    val: React.PropTypes.number,
    mod: React.PropTypes.number,
    save: React.PropTypes.number,
    text: React.PropTypes.string,
  }).isRequired,
};

export default AbilityRow;
