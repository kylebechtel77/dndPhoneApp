import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import AbilityRow from '../Components/AbilityRow';
import BaseStyleSheet from '../Styles/Base';
import Layout from '../Components/Layout';

const image = require('../Images/BackgroundPortrait.png');

const window = Dimensions.get('window');

const AbilitiesScreen = (props) => {
  const { character } = props;
  return (
    <Image source={image} style={{ width: window.width, height: window.height }}>
      <ScrollView>
        <View style={BaseStyleSheet.card}>
          <AbilityRow
            ability={character.abilities.str}
            proficiencyBonus={character.proficiencyBonus}
          />
          <Layout.RowDivider />
          <AbilityRow
            ability={character.abilities.dex}
            proficiencyBonus={character.proficiencyBonus}
          />
          <Layout.RowDivider />
          <AbilityRow
            ability={character.abilities.con}
            proficiencyBonus={character.proficiencyBonus}
          />
          <Layout.RowDivider />
          <AbilityRow
            ability={character.abilities.int}
            proficiencyBonus={character.proficiencyBonus}
          />
          <Layout.RowDivider />
          <AbilityRow
            ability={character.abilities.wis}
            proficiencyBonus={character.proficiencyBonus}
          />
          <Layout.RowDivider />
          <AbilityRow
            ability={character.abilities.cha}
            proficiencyBonus={character.proficiencyBonus}
          />
        </View>
      </ScrollView>
    </Image>
  );
};

AbilitiesScreen.propTypes = {
  character: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  character: state.characters[0],
});

export default connect(
  mapStateToProps,
)(AbilitiesScreen);
