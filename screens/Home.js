import {StyleSheet,Text,ScrollView,View,Pressable,ImageBackground,Dimensions} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Carrousel from '../components/Carrousel'

var {height} = Dimensions.get('window')

export default function Home() {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.home}>
            <ImageBackground source={require('../assets/photos/camino.jpg')} resizeMode="cover" style={styles.homeBack}>
                <View style={styles.homeBack}>
                    <Text style={styles.font}>MyTinerary</Text>
                    <View style={styles.tombo}>
                    <Text style={styles.texts}>FIND YOUR PERFECT TRIP</Text>
                    <Text style={styles.texts}>Designed by insiders who know and love their cities!</Text>
                    </View>
                    <Pressable onPress={()=>navigation.navigate('Cities')} style={styles.linkHero} >
                        <Text style={[styles.linkText,styles.texts]}>LOOK IT NOW!</Text>
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
    homeBack: {
        width: '100%',
        height: height,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    font: {
        fontSize: 70,
        fontWeight: 'bold',
        elevation: 100,
        textShadowColor: 'white',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 10,
        color: 'rgb(11, 94, 215)',
        backgroundColor:"rgba(128, 128, 128, 0.356)",
        padding: 10,
        marginTop: 50,
        borderRadius:10
    },
    texts: {
        
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color:'white',
        textShadowColor:'rgb(11, 94, 215)',
        textShadowOffset:{width: 0,height: 2},
        textShadowRadius: 8,
      

        
        
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
        backgroundColor:"rgba(128, 128, 128, 0.356)",
        borderRadius:4
    },
    linkText: {
        color: 'white',
        backgroundColor: 'rgb(11, 94, 215)',
        padding: 10,
        borderRadius: 10,
        
    }
})