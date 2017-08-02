import React from 'react';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/SkillRowStyle';
import LabeledNumber from './LabeledNumber';
import LabeledText from './LabeledText';

const SkillRow = (props) => {
  const skill = props.skill;
  const modPlus = skill.mod >= 0 ? '+' : '';
  return (
    <View style={StyleSheet.skillRow}>
      <LabeledText label={skill.typ} value={skill.text} />
      <LabeledNumber label="MOD" value={modPlus + skill.mod} />
      
    </View>
  );
};

SkillRow.propTypes = {
  skill: React.PropTypes.shape({
    val: React.PropTypes.number,
    mod: React.PropTypes.number,
    save: React.PropTypes.number,
    text: React.PropTypes.string,
  }).isRequired,
};

export default SkillRow;
