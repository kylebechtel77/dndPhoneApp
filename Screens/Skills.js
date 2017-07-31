import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class SkillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Skills',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>"TODO:: Implement this"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  }
})
