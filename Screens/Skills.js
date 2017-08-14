import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import BaseStyleSheet from '../Styles/Base';
import SkillRow from '../Components/SkillRow';

const window = Dimensions.get('window');

const image = require('../Images/BackgroundPortrait.png');

const SkillsScreen = (props) => {
  const { skills } = props;

  return (
    <Image source={image} style={{ width: window.width, height: window.height }}>
      <ScrollView style={BaseStyleSheet.card2}>
        <SkillRow skill={skills.acr} />
        <SkillRow skill={skills.ani} />
        <SkillRow skill={skills.arc} />
        <SkillRow skill={skills.ath} />
        <SkillRow skill={skills.dec} />
        <SkillRow skill={skills.his} />
        <SkillRow skill={skills.ins} />
        <SkillRow skill={skills.int} />
        <SkillRow skill={skills.inv} />
        <SkillRow skill={skills.med} />
        <SkillRow skill={skills.nat} />
        <SkillRow skill={skills.per} />
        <SkillRow skill={skills.prf} />
        <SkillRow skill={skills.prs} />
        <SkillRow skill={skills.rel} />
        <SkillRow skill={skills.sle} />
        <SkillRow skill={skills.ste} />
        <SkillRow skill={skills.sur} />
      </ScrollView>
    </Image>
  );
};

SkillsScreen.propTypes = {
  skills: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  skills: state.characters[0].skills,
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
//  mapDispatchToProps,
)(SkillsScreen);
