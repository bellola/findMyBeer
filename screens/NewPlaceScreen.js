import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native'
import {useDispatch} from 'react-redux'
import * as placesActions from '../store/places-actions'
import ImagePicker from '../components/ImagePicker'
import LocationPicker from '../components/LocationPicker'

const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('')
    const [selectedImage, setSelectedImage] = useState()

    const dispatch = useDispatch()

    const titleChangerHandler = text => {
        //add validation later
        setTitleValue(text)
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath)
    }

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, selectedImage))
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={titleChangerHandler} value={titleValue} />
                <ImagePicker onImageTaken={imageTakenHandler} />
                <LocationPicker />
                <Button title='Save Place' onPress={savePlaceHandler}/>
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'AddPlace',
    marginBottom: 15
}

const styles = StyleSheet.create({
    form:{
        margin: 30
    },
    label:{
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        bordeBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBotton: 20,
        paddingVertical: 4,
        paddingHorizontal: 2
    }

})

export default NewPlaceScreen