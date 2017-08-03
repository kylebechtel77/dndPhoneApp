import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles/Base';

const LabeledNumber = props => (
  <View style={StyleSheet.labeledNumberContainer}>
    <Text style={StyleSheet.labeledNumberValue}>{props.children}</Text>
    <Text style={StyleSheet.labeledNumberLabel}>{props.label}</Text>
  </View>
);

LabeledNumber.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
};

export default LabeledNumber;
