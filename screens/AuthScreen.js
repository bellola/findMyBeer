import React from 'react'
import {StyleSheet, ScrollView, View, Button, KeyboardAvoidingView, TextInput, Alert} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'


const AuthScreen = props => {

    const signUpHandler = () => {
        Alert.alert('Coming soon')
    }

    const loginHandlder = () => {
        props.navigation.navigate('Map')
    }

    return(
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style={styles.screen}>
            <LinearGradient colors={['yellow', 'grey']} style={styles.gradient}>
                <View style={styles.authContainer}>
                    <ScrollView >
                        <TextInput placeholder='email' />
                        <TextInput placeholder='password' secureTextEntry />
                        <Button title='Sign up' onPress={signUpHandler}/>
                        <Button title='Log in' onPress={loginHandlder}/>
                    </ScrollView>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

AuthScreen.navigationOptions = {
    headerTitle: 'Find my beer'
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    gradient:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer:{
        width: '80%',
        height: '50%'

    },
   
})

export default AuthScreen