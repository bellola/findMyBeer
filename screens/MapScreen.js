import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import MapView, {Marker} from 'react-native-maps'

const MapScreen = props => {

    const [selectedLocation, setSelectedLocation] = useState()



    const mapRegion = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const selectLocationHandler = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    let markerCoordinates
    if(selectedLocation){
        markerCoordinates={
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

    return (
        <MapView style={styles.map} region={mapRegion} onPress={selectLocationHandler}>
           {markerCoordinates && <Marker title='Add Bar' coordinate={markerCoordinates}></Marker>}
        </MapView>
        
    )
}

MapScreen.navigationOptions = navData => {
    return  {
             headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                 <Item  iconName='ios-add' 
                 onPress={() => {
                     navData.navigation.navigate('NewPlace')
                 }}/>
             </HeaderButtons>,
             headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
             <Item  title='Favorite bars' 
             onPress={() => {
                 navData.navigation.navigate('Places')
             }}/>
         </HeaderButtons>,
    } 
}



const styles = StyleSheet.create({
    map:{
        flex: 1
    }
})

export default MapScreen