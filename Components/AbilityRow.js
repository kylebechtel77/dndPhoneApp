import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/AbilityRow';
import LabeledNumber from './LabeledNumber';
import DiceRollButton from '../Components/DiceRollButton';
import Stats from '../Utils/Stats';

const AbilityRow = (props) => {
  const ability = props.ability;
  const mod = Stats.calculateAbilityModifier(ability.score);
  const modString = Stats.formatModifier(mod);
  const save = mod + (ability.isProficient ? props.proficiencyBonus : 0);
  const saveString = Stats.formatModifier(save);

  return (
    <View style={StyleSheet.abilityRow}>
      <LabeledNumber label="SCORE"><Text style={{ fontWeight: 'bold' }}>{ability.score}</Text></LabeledNumber>
      <Text style={StyleSheet.abilityName}>{ability.name}</Text>
      <DiceRollButton dice={1} sides={20} modifier={mod} description={`${ability.name} Test`}>
        <View><LabeledNumber label="MOD">{modString}</LabeledNumber></View>
      </DiceRollButton>
      <DiceRollButton dice={1} sides={20} modifier={save} description={`${ability.name} Save`}>
        <View><LabeledNumber label="SAVE">{saveString}</LabeledNumber></View>
      </DiceRollButton>
    </View>
  );
};

AbilityRow.propTypes = {
  ability: PropTypes.shape({
    score: PropTypes.number.isRequired,
    isProficient: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  proficiencyBonus: PropTypes.number.isRequired,
};
AbilityRow.defaultProps = {
  last: false,
};

export default AbilityRow;
