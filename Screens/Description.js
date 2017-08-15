import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import BaseStyleSheet from '../Styles/Base';
import DescriptionStyleSheet from '../Styles/Description';
import LabeledNumber from '../Components/LabeledNumber';
import ItemBox from '../Components/ItemBox';
import Layout from '../Components/Layout';
import BaseScreen from './BaseScreen';

const DescriptionScreen = props => (
  <BaseScreen>
    <Layout.Row>
      <Text style={{ textAlign: 'center', fontSize: 24, flex: 1 }}>Description</Text>
    </Layout.Row>
    <Layout.RowDivider />
    <ScrollView style={BaseStyleSheet.flexDefault}>
      <View style={BaseStyleSheet.card}>
        <ItemBox itemName="Character Details" />
      </View>
      <View style={BaseStyleSheet.card}>
        <ItemBox itemName="Physical Characteristics" />
      </View>
      <View style={BaseStyleSheet.card}>
        <ItemBox itemName="Personal Characteristics" />
      </View>
    </ScrollView>
    <Layout.RowDivider />
    <Layout.Row>
      <View style={BaseStyleSheet.flexDefault} />
      <Button style={DescriptionStyleSheet.addItemButton} title="+ Add Item" onPress={() => {}} />
    </Layout.Row>
  </BaseScreen>
);

DescriptionScreen.propTypes = {
  character: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  character: state.characters[0],
});

export default connect(
  mapStateToProps,
)(DescriptionScreen);
