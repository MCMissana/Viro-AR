import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
//import { VIROAPIKEY } from 'react-native-dotenv';

import PlayScene from './js/PlayScene';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => (
    <View style={styles.root}>
      <ViroARSceneNavigator
          initialScene={{ scene: PlayScene }}
      />
    </View>
);

export default App;