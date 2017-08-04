import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import StyleSheet from '../Styles/SkillRowStyle';
import LabeledNumber from './LabeledNumber';
import LabeledText from './LabeledText';

const SkillRow = (props) => {
  const skill = props.skill;
  const modPlus = skill.mod >= 0 ? '+' : '';
  return (
    <View style={StyleSheet.skillRow}>
      <LabeledText label={skill.typ}>{skill.text}</LabeledText>
      <LabeledNumber label="MOD">{modPlus + skill.mod}</LabeledNumber>
    </View>
  );
};

SkillRow.propTypes = {
  skill: PropTypes.shape({
    val: PropTypes.number,
    mod: PropTypes.number,
    save: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
};

export default SkillRow;
