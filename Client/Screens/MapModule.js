import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";




MapboxGL.setAccessToken("pk.eyJ1IjoidGVjY2lyYWoiLCJhIjoiY2s2dXl2Y3VhMGR3bjNybng4b2U0ZXdmbSJ9.tJPgMszoYoy_EnlRgQ_eGA");


const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    container: {
      height: "100%",
      width: "100%",
      backgroundColor: "tomato"
    },
    map: {
      flex: 1
    }
  });
  



class MapModule extends Component {

    componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
    }    

    render() {
        return(
             <View style={styles.page}>
                <View style={styles.container}>
                    <MapboxGL.MapView style={styles.map} logoEnabled={false}>
                    </MapboxGL.MapView>
                </View>
            </View>
        );
    }
}


export default MapModule;