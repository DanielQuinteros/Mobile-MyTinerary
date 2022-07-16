import React, {useEffect, useState} from 'react'
import {StyleSheet,TextInput,ScrollView,View,ImageBackground,Dimensions} from 'react-native'

import Cards from '../components/cards'
//redux
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

var {height} = Dimensions.get('window')

export default function Cities(props) {
    
    const [input,setInput] = useState("")

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(citiesActions.getCities())
    },[])
    const citiesFromRedux = useSelector(store => store.citiesReducer.cities)//

    return (
        <View style={styles.home}>
            <ImageBackground source={require('../assets/photos/lugaresnevados.jpg')} resizeMode="cover" style={styles.homeBack}>
                <View style={styles.homeBack}>
                    <TextInput onChangeText={text => setInput(text)} placeholder="Search your Trip" style={[styles.input,styles.text]} />
                    <ScrollView style={styles.body}>
                        <Cards input={input} cities={citiesFromRedux} navigation={props.navigation} />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

//styles
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        width: "100%",
       
    },
    homeBack: {
        width: '100%',
        height: height,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    body: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        
    },
    input: {
        width: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: 'rgb(11, 94, 215)',
        backgroundColor:'white'
    },
    text: {
       fontSize: 30,
      
        textAlign: 'center'
    },
})