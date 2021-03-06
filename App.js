import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {FredokaOne_400Regular} from '@expo-google-fonts/dev'
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'

import Home from './screens/Home'
import Cities from './screens/Cities'
import Detail from './screens/Detail'

//redux
import {Provider} from 'react-redux'
import {configureStore as createStore} from '@reduxjs/toolkit';
import mainReducer from './redux/recucers/mainReducer'


const reduxStore = createStore({reducer:mainReducer})

const Stack = createStackNavigator();

export default function App() {
    let [fonts] = useFonts({FredokaOne_400Regular})
    if (!fonts) {return <AppLoading />}
    return (
        <Provider store={reduxStore}> 
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{
                        title: 'MyTineraryApp',
                        headerStyle: {backgroundColor: 'rgb(11, 94, 215)'},
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular'}
                    }}/>
                    <Stack.Screen name="Cities" component={Cities} options={{
                        title: 'Cities',
                        headerStyle: {backgroundColor: 'rgb(11, 94, 215)'},
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular'}
                    }}/>
                    <Stack.Screen name="Detail" component={Detail} options={{
                        title: 'Details',
                        headerStyle: {backgroundColor: 'rgb(11, 94, 215)'},
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {fontFamily: 'FredokaOne_400Regular'}
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

