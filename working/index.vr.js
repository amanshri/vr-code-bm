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
  Scene
} from 'react-vr';
import TouchBubble from './components/display.js';
import InfoBubble from './components/infobubbel.js';
import d from './data.json';
import data from './../bubbel1.json';
export default class Bubble1 extends React.Component {



constructor(props)
  {
    super(props);

    this.state = {
      visibleStatus: false,
      positionx:0,
      positiony:0,
      positionz:0,
    };


    this.styles=StyleSheet.create({  
      // main : {
      //   flex : 1,
      //   flexDirection: 'row',
      //   transform: [{translate: [-2.5, 0, -3]}]},
      
    });

  }





  render() {

    var ry=[90,65,30]
    var heading=["RAM","CPU","NW","hD"]
    return (
      <Scene style={{transform: [{rotateY:90}]}} >
        <Pano source={asset('back.jpg')}/>
           {/* <InfoBubble 
            x={this.state.positionx-1.3}
            y={this.state.positiony-0.8}
            z={this.state.positionz-6}
            ry={90}
            
          /> 
            <InfoBubble 
              x={this.state.positionx-1.3}
              y={this.state.positiony-0.4}
              z={this.state.positionz-6}
              ry={65}
           />
          
           <InfoBubble 
            x={this.state.positionx-0.4}
            y={this.state.positiony+1.5}
            z={this.state.positionz-6}
            ry={30}

           /> */}




           {
              d.positions.map((item,index)=>(
                  

                <InfoBubble 
                x={item.x}
                y={item.y}
                z={item.z}
                ry={ry[index]}
                txt1={item.NAME}
                txt2={item.RAM}
                txt3={item.CPU}
                txt4={item.NW}
                txt5={item.HD}
               heading={heading}
                    />
              ))
           }
           
      </Scene>
    );
  }
};

AppRegistry.registerComponent('Bubble1', () => Bubble1);
