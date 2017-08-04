import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import BaseStyleSheet from '../Styles/Base';

const Row = props => (
  <View style={BaseStyleSheet.row}>
    {props.children}
  </View>
);
Row.propTypes = {
  children: PropTypes.node.isRequired,
};

const RowDivider = () => (
  <View style={BaseStyleSheet.rowDivider} />
);

export default { Row, RowDivider };
