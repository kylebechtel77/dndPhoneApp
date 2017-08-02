import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import StyleSheet from '../Styles/abilityRow';
import LabeledNumber from './labeledNumber';
import Dice from '../utils/dice';

const AbilityRow = (props) => {
  const ability = props.ability;
  const modPlus = ability.mod >= 0 ? '+' : '';
  const savePlus = ability.save >= 0 ? '+' : '';
  const rowStyle = props.last ? StyleSheet.abilityRowLast : StyleSheet.abilityRow;
  return (
    <View style={rowStyle}>
      <LabeledNumber label="SCORE"><Text style={{ fontWeight: 'bold' }}>{ability.val}</Text></LabeledNumber>
      <Text style={StyleSheet.abilityName}>{ability.text}</Text>

      <TouchableOpacity onPress={() => { Dice.alert(Dice.roll(1, 20, ability.mod, `${ability.text} Test`)); }}>
        <View><LabeledNumber label="MOD">{modPlus + ability.mod}</LabeledNumber></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Dice.alert(Dice.roll(1, 20, ability.save, `${ability.text} Save`)); }}>
        <View><LabeledNumber label="SAVE">{savePlus + ability.save}</LabeledNumber></View>
      </TouchableOpacity>
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
  last: React.PropTypes.bool,
};
AbilityRow.defaultProps = {
  last: false,
};

export default AbilityRow;
