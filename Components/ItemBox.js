import React, { Component } from 'react';
import { Animated, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Layout from './Layout';

class ContentsBox extends Component {
  constructor(props) {
    super(props);
    this.state = { height: new Animated.Value(0) };
  }

  componentWillReceiveProps(props) {
    if (props.show) {
      Animated.timing(
        this.state.height,
        {
          toValue: 200,
          duration: 150,
        },
      ).start();
    } else {
      Animated.timing(
        this.state.height,
        {
          toValue: 0,
          duration: 150,
        },
      ).start();
    }
  }

  render() {
    return (
      <Animated.View style={{ borderRadius: 2, backgroundColor: '#fff', height: this.state.height }}>
        <View style={{ margin: 3 }}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}
ContentsBox.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
};
ContentsBox.defaultProps = {
  show: false,
};

class ItemBox extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = () => {
      this.setState(previousState => ({ open: !previousState.open }));
    };
  }

  render() {
    return (
      <View style={{ padding: 5, borderRadius: 2, backgroundColor: '#ddd' }}>
        <Layout.Row>
          <Text style={{ flex: 1 }}>{this.props.itemName}</Text>
          <TouchableOpacity onPress={this.toggle}>
            <Text style={{ textAlign: 'center', width: 24, height: 24, marginBottom: 3, backgroundColor: '#fff', borderRadius: 5 }}>
              { this.state.open ? '-' : '+' }
            </Text>
          </TouchableOpacity>
        </Layout.Row>
        <ContentsBox show={this.state.open}><Text>Data goes here</Text></ContentsBox>
      </View>
    );
  }
}

ItemBox.propTypes = {
  itemName: PropTypes.string.isRequired,
};

export default ItemBox;
