import React from 'react';
import {asset, Model, View,Text,VrButton,Image,Plane} from 'react-vr';
import Display from './display.js';
import data from './../data.json';
import bubble1 from './../bubbles/bubble1.json';

export default class InfoBubble extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      visibleStatus: false,
      custom_opacity:1,
      heading:[],
      description:[],

    };
  }


//hide the display view and fetch the display information of runbubble from the json 
//on runbubble click(runbubble)

  onButtonClick()
  {    
      jsonPath="./../bubbles/bubble";
      jsonPath=jsonPath+this.props.id+".json"  

      fetch(jsonPath).then(response => response.json()).then(jsondata=>
              {            
                        this.setState({heading:jsondata.heading})
                        this.setState({description:jsondata.description})
              })
          
        
        if(this.state.visibleStatus)
        { this.setState({visibleStatus:false}); }
        else
        {this.setState({visibleStatus:true}); }
  }


  
render() {

      return (
    <View style={{position:'absolute',transform: [{rotateY:this.props.ry}]}} >
   
        <VrButton style={{ layoutOrigin: [0.5, 0.5],
                            transform: [{translate: [this.props.x,this.props.y,this.props.z]}],
                            }}
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
                    id={this.props.id}
                    heading={this.state.heading}
                    description={this.state.description}
                    toggle={()=> this.onButtonClick()}
                    status={this.state.visibleStatus}
                    />
                
               
       </View>

     </View>
      );
    }
  }















 