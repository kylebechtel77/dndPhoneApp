import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import BaseStyleSheet from '../Styles/Base';
import EquipmentStyleSheet from '../Styles/Equipment';
import LabeledNumber from '../Components/LabeledNumber';
import ItemBox from '../Components/ItemBox';
import Layout from '../Components/Layout';
import BaseScreen from './BaseScreen';

const EquipmentScreen = props => (
  <BaseScreen>
    <Layout.Row>
      <Text style={{ textAlign: 'center', fontSize: 24, flex: 1 }}>Currency</Text>
    </Layout.Row>
    <Layout.Row>
      <View style={BaseStyleSheet.flexDefault}>
        <LabeledNumber label="Platinum">{props.character.currency.platinum}</LabeledNumber>
      </View>
      <View style={BaseStyleSheet.flexDefault}>
        <LabeledNumber label="Gold">{props.character.currency.gold}</LabeledNumber>
      </View>
      <View style={BaseStyleSheet.flexDefault}>
        <LabeledNumber label="Electrum">{props.character.currency.electrum}</LabeledNumber>
      </View>
      <View style={BaseStyleSheet.flexDefault}>
        <LabeledNumber label="Silver">{props.character.currency.silver}</LabeledNumber>
      </View>
      <View style={BaseStyleSheet.flexDefault}>
        <LabeledNumber label="Copper">{props.character.currency.copper}</LabeledNumber>
      </View>
    </Layout.Row>
    <Layout.RowDivider />
    <ScrollView style={BaseStyleSheet.flexDefault}>
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
      <View style={BaseStyleSheet.flexDefault} />
      <Button style={EquipmentStyleSheet.addItemButton} title="+ Add Item" onPress={() => {}} />
    </Layout.Row>
  </BaseScreen>
);

EquipmentScreen.propTypes = {
  character: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  character: state.characters[0],
});

export default connect(
  mapStateToProps,
)(EquipmentScreen);
