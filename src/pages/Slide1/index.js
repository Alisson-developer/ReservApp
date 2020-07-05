import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import { Entypo } from '@expo/vector-icons'

import restaurant from '../../assets/restaurant.jpeg'

export default function Slide1({navigation}){
    function navigateToSlide2(){
        navigation.push('Slide2')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image style={styles.image} source={restaurant} />
            </View>
            <Text style={styles.slideText}>Marcadores com bordas vermelhas no mapa, indicam a localização de restaurantes</Text>
            
            <TouchableOpacity style={styles.arrowRight} onPress={navigateToSlide2}>
                <Entypo name="chevron-thin-right" size={25} color="#fff" />
            </TouchableOpacity>

            <View style={styles.dotContainer}>
                <View style={styles.dotSelected}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>

            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    imageContainer: {
        alignSelf: 'center',
        elevation: 3,
        borderColor: '#f42d56',
        borderStyle: 'solid',
        borderWidth: 3,
        width: 260,
        height: 260,
        borderRadius: 10,
        marginTop: 100,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },

    slideText: {
        alignSelf: 'center',
        width: 245,
        fontSize: 15,
        marginTop: 20,
        textAlign: 'center'
    },

    dotContainer: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        width: 60,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 50
    },

    dotSelected: {
        width: 15,
        height: 10,
        backgroundColor: '#f52d56',
        borderRadius: 15
    },

    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#c4c4c4',
        borderRadius: 15
    },

    arrowRight: {
        top: '23%',
        left: '75%',
        backgroundColor: '#f42d56',
        borderRadius: 100 / 0.5,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})