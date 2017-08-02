import React from 'react';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/Base';

const LabeledNumber = props => (
  <View style={StyleSheet.labeledNumberContainer}>
    <Text style={StyleSheet.labeledNumberValue}>{props.value}</Text>
    <Text style={StyleSheet.labeledNumberLabel}>{props.label}</Text>
  </View>
);

LabeledNumber.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default LabeledNumber;
