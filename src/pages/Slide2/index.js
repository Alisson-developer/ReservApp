import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import { Entypo } from '@expo/vector-icons'

import parking from '../../assets/parking.jpeg'

export default function Slide2({navigation}){
    function navigateBack(){
        navigation.goBack()
    }

    function navigateToSlide3(){
        navigation.push('Slide3')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image style={styles.image} source={parking} />
            </View>
            <Text style={styles.slideText}>Marcadores com bordas azuis no mapa, indicam a localização de estacionamentos.</Text>
                <TouchableOpacity style={styles.arrowRight} onPress={navigateToSlide3}>
                    <Entypo name="chevron-thin-right" size={25} color="#fff" />
                </TouchableOpacity>

            <View style={styles.dotContainer}>
                <TouchableOpacity onPress={navigateBack} style={styles.dot}></TouchableOpacity>
                <TouchableOpacity style={styles.dotSelected}></TouchableOpacity>
                <TouchableOpacity onPress={navigateToSlide3} style={styles.dot}></TouchableOpacity>
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
        borderColor: '#0000dd',
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
        marginTop: 20,
        textAlign: 'center'
    },

    dotContainer: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60,
        alignItems: 'flex-end',
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

    containerButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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