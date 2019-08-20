import React from 'react';
import {asset, Model, View,Text,VrButton,Image,Plane, VideoControl, MediaPlayerState} from 'react-vr';



export default class InsideTouchBubble extends React.Component {
  
  
  constructor(props) {
    super(props);
  
    this.state = {
      visibleStatus: true,
      positionx:0,
      positiony:0,
      positionz:0,
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay

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
    
  }
    render() {
      console.log("last"+this.props.x);
    console.log(this.props.y);
    console.log(this.props.z);
      return (
       
        <View style={{ borderRadius:0.1,margin:0,opacity:1000,position:'absolute',height:3.5,width:2.5,backgroundColor:"skyblue",left:0,top:0,bottom:0,right:0,transform: [{translate: [this.props.x, this.props.y, this.props.z-2]}],}}>                               
            <VrButton style={{
                                            width:0.2,
                                            height: 0.2,                                                                           
                                            marginLeft:0.2,
                                            marginRight:0.2,                                                                                                                                       
                                  }}
                                // onEnter={ () => this.animateProgress() }
                                  //  onExit={ () => this.stopProgress() }
                                    onClick={ ()=> this.props.cross() }
                        >                        
              <Image
                  style={{  width:0.5, height: 0.5, marginLeft:1.8}}
                  source={asset('cross.png')}
                >
                </Image>
           </VrButton> 
                      
                     <Text style={{marginTop:0.4,fontSize:0.3}}>{this.props.heading}</Text> 
                     <Text style={{marginTop:0.4,fontSize:0.3}}>{this.props.textspec}</Text> 
           </View>
          
      );
    }
  }















 