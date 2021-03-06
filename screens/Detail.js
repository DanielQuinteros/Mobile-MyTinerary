import React, {useEffect, useState} from 'react'
import {StyleSheet,Text,ScrollView,View,Image,ImageBackground,Dimensions} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


var {height} = Dimensions.get('window')

export default function Itineraries(props) {

    const{id} = props.route.params
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getOneCities(id))
    },[])
    const oneCityFromRedux = useSelector(store => store.citiesReducer.oneCity)


    var image = 'https://my-tinerary-quinteros-back.herokuapp.com'+oneCityFromRedux.image

    return (
        <View style={styles.home}>
            <ImageBackground source={require('../assets/photos/lugaresnevados.jpg')} resizeMode="cover" style={styles.backGhome}>
                <View style={styles.backGhome}>
                    <ScrollView style={styles.body}>
                        <View style={styles.absolute}>
                            <Text style={styles.textTitle}>{oneCityFromRedux.city}</Text>
                            <Text style={styles.textSubtitle}>{oneCityFromRedux.country} - {oneCityFromRedux.name}</Text>
                        </View>
                        <Image source={{uri: oneCityFromRedux.image}} style={{width: '100%', height: 290}}/>
                        <Text>-</Text>
                        <Text style={styles.description}>{oneCityFromRedux.description}</Text>
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
    backGhome: {
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
        marginTop: 10,
        marginBottom: 10
    },
    absolute: {
        zIndex: 10,
        position: "absolute",
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textTitle: {

        fontSize: 40,
        textAlign: 'center',
        textShadowColor: 'red',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 1
    },
    textSubtitle: {
     
        fontSize: 35,
        paddingBottom: 200,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {width: 2,height: 3},
        textShadowRadius: 1
    },
    textt: {
       
        textAlign: 'center'
    },
      letter: {
        fontSize: 30,
        textAlign: 'center',
        textShadowColor: 'black',
        color: 'white',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 1,
        backgroundColor: 'red',
        top: 40,
        paddingBottom: 50
    },
    description: {
        fontSize: 25,
        color: 'black',
        textShadowColor: 'black',
        textShadowOffset: {width: 0,height: 1},
        textShadowRadius: 1,
        textAlign: 'center',
        backgroundColor: 'rgba(242, 227, 223, 0.5)',
        borderRadius: 20,
               
    },
})