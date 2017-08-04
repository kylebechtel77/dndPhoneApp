import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import Dice from '../Utils/Dice';
import BaseStyleSheet from '../Styles/Base';

const image = require('../Images/D20.png');

const LabeledNumber = (props) => {
  const onPress = () => {
    Dice.alert(Dice.roll(props.dice, props.sides, props.modifier, props.description));
  };

  return (
    <TouchableOpacity style={BaseStyleSheet.diceRollButton} onPress={onPress}>
      <Image source={image} style={{ resizeMode: 'contain', width: null, height: null }}>
        {props.children}
      </Image>
    </TouchableOpacity>
  );
};

LabeledNumber.propTypes = {
  children: PropTypes.node.isRequired,
  dice: PropTypes.number.isRequired,
  sides: PropTypes.number.isRequired,
  modifier: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default LabeledNumber;
