import React from 'react';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/Base';

const LabeledText = props => (
  <View style={StyleSheet.labeledTextContainer}>
    <Text style={StyleSheet.labeledTextLabel}>{props.label}</Text>
    <Text style={StyleSheet.labeledTextValue}>{props.children}</Text>
  </View>
);

LabeledText.propTypes = {
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node.isRequired,
};

export default LabeledText;
