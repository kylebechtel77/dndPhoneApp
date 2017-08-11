import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import BaseStyleSheet from '../Styles/Base';
import LabeledNumber from '../Components/LabeledNumber';
import ItemBox from '../Components/ItemBox';
import Layout from '../Components/Layout';

const image = require('../Images/BackgroundPortrait.png');

const window = Dimensions.get('window');

const EquipmentScreen = (props) => {
  const { character } = props;
  return (
    <Image source={image} style={{ width: window.width, height: window.height }}>
      <View style={{ flexDirection: 'column' }}>
        <Layout.Row style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 24, flex: 1 }}>Currency</Text>
        </Layout.Row>
        <Layout.Row>
          <View style={{ flex: 1 }}>
            <LabeledNumber label="Platinum">{character.currency.platinum}</LabeledNumber>
          </View>
          <View style={{ flex: 1 }}>
            <LabeledNumber label="Gold">{character.currency.gold}</LabeledNumber>
          </View>
          <View style={{ flex: 1 }}>
            <LabeledNumber label="Electrum">{character.currency.electrum}</LabeledNumber>
          </View>
          <View style={{ flex: 1 }}>
            <LabeledNumber label="Silver">{character.currency.silver}</LabeledNumber>
          </View>
          <View style={{ flex: 1 }}>
            <LabeledNumber label="Copper">{character.currency.copper}</LabeledNumber>
          </View>
        </Layout.Row>
        <Layout.RowDivider />
        <ScrollView style={{ height: 490 }}>
          <View style={BaseStyleSheet.card}>
            <ItemBox itemName="ITEM 1" />
          </View>
          <View style={BaseStyleSheet.card}>
            <ItemBox itemName="ITEM 2" />
          </View>
          <View style={BaseStyleSheet.card}>
            <ItemBox itemName="ITEM 3" />
          </View>
          <View style={BaseStyleSheet.card}>
            <ItemBox itemName="ITEM 4" />
          </View>
        </ScrollView>
        <Layout.RowDivider />
        <Layout.Row>
          <View style={{ flex: 1 }} />
          <Button title="+ Add Item" />
          <View style={{ width: 10 }} />
        </Layout.Row>
      </View>
    </Image>
  );
};

EquipmentScreen.propTypes = {
  character: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  character: state.characters[0],
});

export default connect(
  mapStateToProps,
)(EquipmentScreen);
