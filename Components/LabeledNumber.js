import React from 'react';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/styles';

const LabeledNumber = props => (
  <View style={StyleSheet.labeledNumberContainer}>
    <Text style={StyleSheet.labeledNumberValue}>{props.children}</Text>
    <Text style={StyleSheet.labeledNumberLabel}>{props.label}</Text>
  </View>
);

LabeledNumber.propTypes = {
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node.isRequired,
};

export default LabeledNumber;
