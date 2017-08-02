import React from 'react';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/Base';

const LabeledText = props => (
  <View style={StyleSheet.labeledTextContainer}>
    <Text style={StyleSheet.labeledTextLabel}>{props.label}</Text>
    <Text style={StyleSheet.labeledTextValue}>{props.value}</Text>
  </View>
);

LabeledText.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

export default LabeledText;
