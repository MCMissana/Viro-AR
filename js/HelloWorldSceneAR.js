'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroConstants,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <Viro3DObject
            source={require('./Hamburger.obj')}
            position={[0, 0, -1]}
            scale={[1, 1, 1]}
            resources={[require('./Hamburger.mtl'),
                        require('./Hamburger_BaseColor.png')
                        ]}
            type="OBJ"
            onLoadStart={this._onLoadStart}
            onLoadEnd={this._onLoadEnd}
            onError={this._onError}
        />
      </ViroARScene>
    );
  }

  _onLoadStart() {
    console.log("OBJ loading has started");
  }

  _onLoadEnd() {
    console.log("OBJ loading has finished");
  }

  _onError(event) {
    console.log("OBJ loading failed with error: " + event.nativeEvent.error);
  }


  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
