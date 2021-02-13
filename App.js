import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class CustomButton extends Component {
  displayAlert=()=>{
    alert("this is an alert")
  }
  render(){
    return(
      <Button color={this.props.myColor} title="Click Me" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:"yellow",height:"100%"}}>

        <CustomButton  myColor="purple"/>
        
        <View style={{marginTop: 100}}>
          <CustomButton  myColor="blue"/>
          </View>
        <Text>My First React Component</Text>
      </View>

    );
  }
}