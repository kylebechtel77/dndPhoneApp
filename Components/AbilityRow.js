import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default class AbilityRow extends Component {
  render() {
    let display = /*this.prop.img  + */ this.props.ability.val + " " + this.props.ability.text + " MOD: " + this.props.ability.mod + " SAVE: " + this.props.ability.save;
    return (
      <Text>{display}</Text>
    );
  }
}
