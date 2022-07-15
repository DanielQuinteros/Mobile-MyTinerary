import React, {useEffect} from 'react'
import {StyleSheet,Text,ScrollView,View,Pressable,Image,Dimensions} from 'react-native'

import Card from './card'

//redux
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

export default function Cards (props) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(citiesActions.filterCities(props.input))
    },[props.input])
    const filterFromRedux = useSelector(store => store.citiesReducer.filter)

    let data = props.input ? filterFromRedux : props.cities

    return (
        <>
        {data.length>0 ? 
            data.map( cities =>
            <View key={cities._id} style={{marginBottom: 10}}>
                <Card city={cities} navigation={props.navigation}/>
            </View>) : <>
                <Text style={styles.fredoka}>WE DON'T HAVE THIS TRIP 😕</Text>
                
            </>
        }
        </>
    )
}

//styles
const styles = StyleSheet.create({
    fredoka: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:30,
        textShadowColor: 'black',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 5,
        color: 'rgb(11, 94, 215)'
    }
})