/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { PermissionsAndroid } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  navigator
} from 'react-native';


import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('sk.eyJ1Ijoic2FpdmFscGFkYXN1IiwiYSI6ImNqeno0N2lrMzAza2EzYnBpZnVkYzNwODYifQ.L7KbdKc9jlyAMdfcuH0nXA');

export default class App extends Component{
  
  componentDidMount(){
    
  }
  constructor(props){
    super(props);
    this.state = {
      center: [78.4867,17.3850],
      zoomLevel: 20,

    }
  }

  render() {
    return (
      <View style={styles.container}>
          <MapboxGL.MapView 
          style={{flex:1}}
          styleURL={MapboxGL.StyleURL.Street}
          rotateEnabled={false}
          animated={true}
          showUserLocation={true}
          >
            <MapboxGL.Camera
              zoomLevel={10}
              centerCoordinate={this.state.center}
            />
            <MapboxGL.PointAnnotation
            id={'1'}
          coordinate={[78.4867,17.3850]}
          title="This is a point ann">
              <MapboxGL.Callout title="This is a sample" />
            </MapboxGL.PointAnnotation>
          </MapboxGL.MapView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1
  }
});

