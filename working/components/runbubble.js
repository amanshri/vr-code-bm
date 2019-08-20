import React from 'react';
import {asset, Model, View,Text,VrButton,Image,Plane} from 'react-vr';
import TouchBubble from './display.js';
import InsideTouchBubble from './bubbleinsidetouch.js'

  {/*
                //style={this.state.visibleStatus ? null : { display: "none" }}
                //  { opacity: 0},
              */}

export default class RunBubble extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      visibleStatus1: false,
      visibleStatusbutton:true,
      custom_opacity:1,
      positionx:0,
      positiony:0,
      positionz:0,

    };
  }

  onButtonClick()
  {
    
      
    if(this.state.visibleStatus1)
    { 
    
      this.props.high();   
      
    this.setState({visibleStatus1:false});

    }
    else
    {  this.props.low(); 
     
     this.setState({visibleStatus1:true});

    

    }
  }


  
    render() {

      

      return (
       

   <View >
      <View  style={this.state.visibleStatus1 ? {opacity:1,backgroundColor:"red",}:{display: "none"}}>
       
                
       <InsideTouchBubble
       heading={this.props.heading}
       textspec={this.props.text}
       x={this.props.x}
       y={this.props.y}
       z={this.props.z}
       cross={()=> this.onButtonClick()}
      

       />

       </View>
    <View style={{width:2,height:0.3 }}>
   
    
    <View style={{ flexDirection: 'row',position:'absolute'}}>

                <VrButton style={{
                                            //layoutOrigin: [0.5, 0.5],
                                            //transform: [{translate: [this.props.x,this.props.y,this.props.z]}],
                                            width:0.2,
                                            height: 0.2,
                                            backgroundColor:'green',
                                            borderRadius:1,                                        
                                            marginLeft:0.2,
                                            marginRight:0.2,
                                            
                                           
                                                         
                                  }}
                                // onEnter={ () => this.animateProgress() }
                                  //  onExit={ () => this.stopProgress() }
                                    onClick={ ()=> this.onButtonClick() }
                        >                        
                            

                      </VrButton> 
                     
                      <Text 
                        style={{color:"black",marginLeft:0.3,marginTop:-0.07,fontSize:0.25,}}>
                              {this.props.heading}
                        </Text>
                        </View>

             
     </View>
  </View>
      );
    }
  }















 