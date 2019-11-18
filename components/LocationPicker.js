import React, {useState} from 'react'
import {View, Button, Text, ActivityIndicator, Alert, StyleSheet} from 'react-native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import MapPreview from './MapPreview'

const LocationPicker = props => {

    const [isFetching, setIsFetching] = useState(false)
    const [pickedLocation, setPickedLocation] = useState()
    
    const getPermission =  async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if (result.status !== 'granted' ){
          Alert.alert('Location permision required')
          return false
        }
        return true
      }

    const getLocationHanlder = async () =>{
       const hasPermission = await getPermission()
       if(!hasPermission){
           return
       }

        try{

            setIsFetching(true)
       const location = await Location.getCurrentPositionAsync({
           timeout: 5000
       });
       console.log(location)
       setPickedLocation({
           lat: location.coords.latitude,
           lng: location.coords.longitude
       })
        } catch(err){
            Alert.alert('Could not get location')
        }
        setIsFetching(false)
    }

  

    return (
        <View style={styles.locationPicker}>
          <MapPreview style={styles.mapPreview} location={pickedLocation}>
            {isFetching ? (
              <ActivityIndicator size="large" />
            ) : (
              <Text>No location chosen yet!</Text>
            )}
          </MapPreview>
          <View style={styles.actions}>
            <Button
              title="Get User Location"
              onPress={getLocationHanlder}
            />
          </View>
        </View>
      );
    };

const styles = StyleSheet.create({
    locationPicker:{
        marginBottom: 15
    },
    mapPreview:{
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,

    },
     actions: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       width: '100%'

     }

})

export default LocationPicker