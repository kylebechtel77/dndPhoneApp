import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import BaseStyleSheet from '../Styles/Base';

const image = require('../Images/BackgroundPortrait.png');

class BaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: 0, screenHeight: 0 };
  }

  updateScreenSize(eventData) {
    const screenWidth = eventData.nativeEvent.layout.width;
    const screenHeight = eventData.nativeEvent.layout.height;
    this.setState(() => ({
      screenWidth,
      screenHeight,
    }));
  }

  render() {
    return (
      <View
        style={BaseStyleSheet.baseScreen}
        onLayout={(event) => { this.updateScreenSize(event); }}
      >
        <Image
          source={image}
          style={[
            BaseStyleSheet.backgroundImage,
            {
              width: this.state.screenWidth,
              height: this.state.screenHeight,
            },
          ]}
        />
        {this.props.children}
      </View>
    );
  }
}

BaseScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseScreen;
