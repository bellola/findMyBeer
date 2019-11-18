import React, {useState} from 'react'
import { View, StyleSheet, Button, Image, Text, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const ImgPicker = props =>{
    const [pickedImage, setPickedImage] = useState()

    const getPermission =  async () => {
      const result = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (result.status !== 'granted' ){
        Alert.alert('Permision required', [{text: 'Got it!'}]
        )
        return false
      }
      return true
    }

    const takeImageHandler = async () => {
        const hasPermission = await getPermission()
        if(!hasPermission){
            return
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.5
        })

        setPickedImage(image.uri)
        props.onImageTaken(image.uri)
    }

    return(
        <View style={styles.imagePciker}>
            <View style={styles.imagePreview}>
                {!pickedImage ?
                 (<Text>Select image</Text>) :
                (<Image style={styles.image} source={{uri: pickedImage}} />)}
            </View>
            <Button title='Take image' onPress={takeImageHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imagePicker:{
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview:{
        marginTop: 25,
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    image:{
        width: '100%',
        height: '100%'
    }
})

export default ImgPicker