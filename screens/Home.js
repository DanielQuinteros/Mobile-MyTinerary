import {StyleSheet,Text,ScrollView,View,Pressable,ImageBackground,Dimensions} from 'react-native'
// import {FredokaOne_400Regular} from '@expo-google-fonts/dev'
// import {Licorice_400Regular} from '@expo-google-fonts/dev'
// import AppLoading from 'expo-app-loading'
// import {useFonts} from 'expo-font'
import {useNavigation} from '@react-navigation/native'
import Carrousel from '../components/Carrousel'

var {height} = Dimensions.get('window')

export default function Home() {
    const navigation = useNavigation()
    // let [fonts] = useFonts({FredokaOne_400Regular,Licorice_400Regular})
    // if (!fonts) {return <AppLoading />}
    return (
        <ScrollView style={styles.home}>
            <ImageBackground source={require('../assets/photos/camino.jpg')} resizeMode="cover" style={styles.backGhome}>
                <View style={styles.backGhome}>
                    <Text style={styles.licorice}>MyTinerary</Text>
                    <View style={styles.tombo}>
                    <Text style={styles.fredoka}>FIND YOUR PERFECT TRIP</Text>
                    <Text style={styles.fredoka}>Designed by insiders who know and love their cities!</Text>
                    </View>
                    <Pressable onPress={()=>navigation.navigate('Cities')} style={styles.linkHero} >
                        <Text style={[styles.linkText,styles.fredoka]}>LOOK IT NOW</Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <View>
            <Carrousel />

            </View>

        </ScrollView>
    );
}

//styles
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        width: "100%",
        backgroundColor: 'rgba(130, 77, 52, 0.4)'
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
    licorice: {
        fontSize: 70,
        //fontFamily: 'Sans_serif',
        elevation: 100,
        textShadowColor: 'white',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 5,
        color: 'black',
        backgroundColor:"rgba(128, 128, 128, 0.356)",
        padding: 10,
        marginTop: 50,
        borderRadius:10
    },
    fredoka: {
        // fontFamily: 'FredokaOne_400Regular',
        textAlign: 'center',

        
        
    },
    linkHero: {
        marginTop: 15,
        padding: 7,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'rgb(11, 94, 215)',
        borderRadius: 20,
        marginTop:100
    },
    tombo:{
        marginTop:90,
        backgroundColor:"rgba(128, 128, 128, 0.356)"
    },
    linkText: {
        color: 'white',
        backgroundColor: 'rgb(11, 94, 215)',
        padding: 10,
        borderRadius: 10,
        
    }
})