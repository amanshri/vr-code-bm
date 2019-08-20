import React from 'react';
import {asset, Model, View,Text,VrButton,Image,Plane,Entity} from 'react-vr';
import TouchBubble from './display.js';
import InsideTouchBubble from './bubbleinsidetouch.js'

  

export default class RunBubble extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      visibleStatus1: false,
      custom_opacity:1,
    

    };
  }

  onButtonClick()
  {
    this.props.hideModelView()
      
    if(this.state.visibleStatus1)
    { 
    
      this.props.high();   
      
    this.setState({visibleStatus1:false});

    }
    else
    {  
      this.props.low(); 
     
     this.setState({visibleStatus1:true});

    

    }
  }


  
    render() {

      

      return (
       

   <View >
      <View  style={this.state.visibleStatus1 ? {opacity:1,backgroundColor:"red",}:{display: "none"}}>
       
                
       <InsideTouchBubble
       heading={this.props.heading}
       description={this.props.description}
       x={this.props.x}
       y={this.props.y}
       z={this.props.z}
       cross={()=> this.onButtonClick()}
      

       />

       </View>
    <View style={this.props.status ?{width:2.5,height:0.3 ,opacity:1,backgroundColor:"red"}:{display: "none"}}>
    
    
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
                                    onClick={ ()=> this.onButtonClick() }
                        >                        
                            

                      </VrButton> 
                     
                      <Text 
                        style={{color:"black",marginLeft:0.3,marginTop:-0.07,fontSize:0.25,}}>
                              {this.props.heading}
                        </Text>
                        <VrButton style={{    marginLeft:0.6,
                                            top:0.07,
                                            width:0.2,
                                            height: 0.2}}>
                        <Model style={{
                                            transform: [                                        
                                              //{translateX:parseInt(this.props.x)+3},{rotateX:20,rotateY:0,rotateZ:0},
                                              {scale : 0.03},
                                            ]                          
                                  }}
                        
                        
                        source={{obj:asset('f1.obj'),mtl:asset('f1.mtl')}}
	                    
                        >
                        </Model>
                        
                        
                           </VrButton>
                        </View>

             
     </View>
  </View>
      );
    }
  }















 