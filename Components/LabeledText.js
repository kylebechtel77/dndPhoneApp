import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/Base';

const LabeledText = props => (
  <View style={StyleSheet.labeledTextContainer}>
    <Text style={StyleSheet.labeledTextLabel}>{props.label}</Text>
    <Text style={StyleSheet.labeledTextValue}>{props.children}</Text>
  </View>
);

LabeledText.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
};

export default LabeledText;
