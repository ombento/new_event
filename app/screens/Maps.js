import React, { Component } from 'react';
import { Button, StyleSheet, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Container,
  Text,
  Form,
  Item,
  Input,
  H1, Label
} from 'native-base';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import UserMaps from '../component/maps/userMaps';
import FetchLocation from '../component/maps/fetchLocation';
class Maps extends Component {
  componentWillMount(){
    navigator.geolocation.getCurrentPosition(position =>{
      //console.log(position);
      this.setState({   
        userLocation:{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025
        }
      })
      },err => console.log(err));
  }

  state={
    userLocation: null,
    userMarker:null
  }
  getUserLocationHandler = () =>{
    navigator.geolocation.getCurrentPosition(position =>{
    console.log(position);
    this.setState({
      userLocation:{
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0421
      }
    })
    },err => console.log(err));
  }

  render() {
    return (
      <Container>
          <FetchLocation onGetLocation={this.getUserLocationHandler}/>
          <UserMaps userLocation={this.state.userLocation}/>
  
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  mapContainer:{
      width:'100%',
      height: 200
  },
  map:{
      width:'100%',
      height:'100%'
  }
});
export default connect()(Maps);
