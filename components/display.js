import React from 'react';
import {asset, Model, View,Text,VrButton,Image} from 'react-vr';
import RunBubble from './runbubble';
import data from './../data.json';
import bubble1 from './../bubbles/bubble1.json';
 
export default class Display extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
        status:true,   
    };
  }

  hideModelView()
{

  if(this.state.status)
    {
      this.setState({status:false});
    }
    else
    {
      this.setState({status:true});
    }

}

  setOpacityLow()
  {
      console.log("set opcity low");
      this.setState({custom_opacity:0.001});

  }
  setOpacityHigh()
  {
      console.log("set opcity high");
      this.setState({custom_opacity:1});

  }

  
    render() {
        return (
   
     
     <View style={{ borderRadius:0.1,opacity:this.state.custom_opacity,backgroundColor:'white', width: 2.5, height:3.5,paddingTop:0.5,}}>
       
              
                    {

                    this.props.heading.map((item,index)=> (  
                          <RunBubble               
                                    x={this.props.x}
                                    y={this.props.y}
                                    z={this.props.z}  
                                    ry={this.props.ry}            
                                    heading={this.props.heading[index]}
                                    description={this.props.description[index]}           
                                    hideModelView={()=> this.hideModelView()}                        
                                    status={this.state.status}                                                              
                                    low={()=> this.setOpacityLow()}
                                    high={()=> this.setOpacityHigh()}
                                />
                        ))
                    }        
      </View>
      );
    }
  }




 





    
  












