import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const userMaps = props => {
    console.log(props.userLocation);
    let userLocationMarker = null;
    if (props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
    }

    return (
        <View style={styles.mapContainer}>
            <MapView
                 showsScale={true}
                 moveOnMarkerPress={false}
                 showsCompass = {true}
                 zoomEnabled={true}
                 scrollEnabled={true}
                style={{ flex: 1, width: window.width }} //window pake Dimensions
                region={props.userLocation} >
                <MapView.Marker
                    coordinate={props.userLocation}
                    title="Lokasi"
                    description="Hello" />
            </MapView>
            {/* <MapView 
                initialRegion={{
                    latitude: -6.17511,
                    longitude: 106.8650395,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                //  region={props.userLocation}
               // region={this.state.region}
                //  onRegionChange={this.onRegionChange}
                style={styles.map}/> */}
            {/* {userLocationMarker} */}
        </View>
    );


}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 800
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default userMaps;

