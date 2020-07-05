import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native'

import Button from '../../components/Button'
import payment from '../../assets/payment.jpeg'

export default function Slide3(){


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image resizeMode="contain" style={styles.image} source={payment} />
            </View>
            <Text style={styles.slideText}>No Reserv você pode efetuar os pagamentos usando seu app de preferência.</Text>

            <View style={styles.buttonContainer}>
                <Button to="SelectLogin" title="Continuar" />
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
        backgroundColor: '#f1f1f1'
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

    buttonContainer: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
})