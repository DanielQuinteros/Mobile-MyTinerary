import React, {useEffect} from 'react'
import {StyleSheet,Text,TouchableOpacity,View,Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';


export default function Card (props) {
    const navigation = useNavigation()

    var image = props.city.image

    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Detail',{id: props.city._id})}>
            <View style={styles.absolute}>
                <Text style={styles.titleTi}>{props.city.name}</Text>
            </View>
            <Image source={{uri: image}} style={{width: '100%', height: 250}}/>
        </TouchableOpacity>
    )
}

//styles
const styles = StyleSheet.create({
    absolute: {
        zIndex: 10,
        position: "absolute",
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    titleTi: {
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
        color:'white',
        textShadowColor: 'rgb(11, 94, 215)',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 5
    }
})