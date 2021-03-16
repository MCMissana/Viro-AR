import React from 'react';

import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker
} from 'react-viro';

const Burger = () => (
    <Viro3DObject
        source={require('./burger.obj')}
        resources={[require('./burger.mtl'), require('./burger_diffuse.png')]}
        highAccuracyEvents={true}
        position={[0, .15, 0]}
        scale={[0.05, 0.05, 0.05]}
        type="OBJ"
    />
);

const Lobster = () => (
    <Viro3DObject
        source={require('./LobsterTail.obj')}
        resources={[require('./LobsterTail.mtl'), require('./LobsterTail_BaseColor.png')]}
        highAccuracyEvents={true}
        position={[0, .15, 0]}
        scale={[0.05, 0.05, 0.05]}
        type="OBJ"
    />
);

const Sammich = () => (
    <Viro3DObject
        source={require('./model.obj')}
        resources={[require('./materials.mtl')]}
        highAccuracyEvents={true}
        position={[0, .15, 0]}
        scale={[0.1, 0.1, 0.1]}
        type="OBJ"
    />
);

ViroARTrackingTargets.createTargets({
  "targetOne" : {
    source : require('./01.jpg'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
  "targetTwo" : {
    source : require('./02.jpg'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
  "targetThree" : {
    source : require('./03.jpg'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
});

const PlayScene = () => (
    <ViroARScene>
      <ViroAmbientLight color="#fff" />
      <ViroARImageMarker target={"targetOne"} >
        <Burger />
      </ViroARImageMarker>
      <ViroARImageMarker target={"targetTwo"} >
        <Lobster />
      </ViroARImageMarker>
      <ViroARImageMarker target={"targetThree"} >
        <Sammich/>
      </ViroARImageMarker>
    </ViroARScene>
);

export default PlayScene;