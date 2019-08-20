import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  StyleSheet,
  Image,
  Scene,
  Model
} from 'react-vr';
import TouchBubble from './components/display.js';
import InfoBubble from './components/infobubbel.js';
import d from './data.json';
import data from './bubbles/bubble1.json';
export default class Bubble1 extends React.Component {



constructor(props)
  {
    super(props);
  }





  render() {

    return (
      <Scene style={{transform: [{rotateY:90}]}} >
        <Pano source={asset('back.jpg')}/> 
           { 
              d.positions.map((item,index)=>(                 
               <InfoBubble 
                x={item.x}
                y={item.y}
                z={item.z}
                ry={parseInt(item.ry)}
                id={item.ID}                          
                    />
              ))
           }


           
           
      </Scene>
    );
  }
};

AppRegistry.registerComponent('Bubble1', () => Bubble1);
