import React from 'react';
import {asset, Model, View,Text,VrButton,Image,Plane} from 'react-vr';
import Display from './display.js';
import data from './../data.json';

 

export default class InfoBubble extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      visibleStatus: false,
      custom_opacity:1,
      positionx:0,
      positiony:0,
      positionz:-3,

    };
  }




  onButtonClick()
  {
  
    if(this.state.visibleStatus)
    {
    this.setState({visibleStatus:false});
  
    }
    else
    {
      this.setState({visibleStatus:true});
     

    }
  }


  
    render() {

      return (
    <View style={{position:'absolute',transform: [{rotateY:this.props.ry}]}} >
   
     <VrButton style={{ layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [this.props.x,this.props.y,this.props.z]}],
                        }}
                 // onEnter={ () => this.animateProgress() }
                  //  onExit={ () => this.stopProgress() }
                    onClick={ ()=> this.onButtonClick() }
        >                      
              <Image
                  style={{  width:0.5, height: 0.5, }}
                  source={asset('info_icon.png')}
                >
                </Image>

       </VrButton> 
  
       
       <View style={this.state.visibleStatus ? {position:'absolute',justifyContent:'center',transform: [{translate: [this.props.x, this.props.y, this.props.z]}]} : {display: "none"}}> 

                    <Display 
                    x={this.props.x}
                    y={this.props.y}
                    z={this.props.z}
                    ry={this.props.ry}
                    txt1={this.props.txt1}
                    txt2={this.props.txt2}
                    txt3={this.props.txt3}
                    txt4={this.props.txt4}
                    txt5={this.props.txt5}
                    heading={this.props.heading}

                    //hide={()=> this.onButtonClick()}
                   // low={()=> this.setOpacityLow()}
                   // high={()=> this.setOpacityHigh()}
                    />
                
               
       </View>

     </View>
      );
    }
  }















 