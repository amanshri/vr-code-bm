import React from 'react';
import {asset, Model, View,Text,VrButton,Image} from 'react-vr';
import RunBubble from './runbubble';
import data from './../data.json';
  var json_data;

var myArray=[];
var spec=["The size of the RAM is 8 8GB","CPU is octa core","Wireless network is connected","1 TB of HD is connected to the"]
export default class Display extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      bounceValue: false,
      positionx:0,
      positiony:0,
      positionz:0,

    };
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

        //style={this.state.visibleStatus ? null : { display: "none" }}
        // display: "none" ,     
        //   fontSize: 0.2,
        //  fontWeight: '400',
        //  layoutOrigin: [0.5, 0.5],
        //  paddingLeft: 0.2,
        //  paddingRight: 0.2,
        //  textAlign: 'center',
        // textAlignVertical: 'center',

  componentDidMount()
  {
    //  json_data = data.run.map((item,index) =>   
    //       <RunBubble
    //             text={item.text}
    //             x={this.props.x-0.3}
    //             y={this.props.y+0.5}
    //             z={this.props.z}  
    //        //  hide={this.props.hide()}
    //         // low={this.props.low}
    //         // high={this.props.high}
    //         low={()=> this.setOpacityLow()}
    //         high={()=> this.setOpacityHigh()}
    //         />
    //       );   
    data.run.map((item,index) =>   
      
              myArray[index]=item.text
          
        );   
  }
    render() {

   
          console.log("Display")
          
          
 var dataArray=[this.props.txt1,this.props.txt2,this.props.txt3,this.props.txt4,this.props.txt5];
       

    
 
        return (
   
     
     <View style={{ borderRadius:0.1,opacity:this.state.custom_opacity,backgroundColor:'white', width: 2.5, height:3.5,paddingTop:0.5,}}>
       
    {/* {json_data} */}
{

myArray.map((item,index)=> (  
      <RunBubble
                
                x={this.props.x}
                y={this.props.y}
                z={this.props.z}  
                ry={this.props.ry}
                text={dataArray[index]}
                heading={this.props.heading[index]}
              //  txt1={this.props.txt1}
              //  txt2={this.props.txt2}
              //  txt3={this.props.txt3}
              //  txt4={this.props.txt4}
              //  txt5={this.props.txt5}
              //text={item}
           //  hide={this.props.hide()}
            // low={this.props.low}
            // high={this.props.high}
            low={()=> this.setOpacityLow()}
            high={()=> this.setOpacityHigh()}
            />
    ))
}        
      </View>
      );
    }
  }




 





    
  












