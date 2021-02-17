import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from "./pages/HomeScreen";


const Stack = createStackNavigator();


export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" options={{ title: 'Overview' }} keyboardHandlingEnabled={true} headerMode={"none"}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}