import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Emoji from 'react-native-emoji'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import Logo from '../../assets/reserv-logo.png'

export default function SelectLogin({ navigation }){

    function navigateToConnectWithNumber(){
        navigation.push('PhoneLogin')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={Logo} />
            </View>

            <View style={styles.main}>
                <View style={styles.header}>
                    <Emoji name="wave" style={styles.emoji} />
                    <Text style={styles.headerTextTitle}>Olá, vamos reservar sua mesa?</Text>
                </View>

                <Text style={styles.headerText}>Nós encotramos uma maneirar mais rápida para você efetuar seu login</Text>

                <TouchableOpacity style={styles.button} onPress={navigateToConnectWithNumber}>
                     <FontAwesome style={styles.icon} name="mobile-phone" size={25} color="#fff" />
                     <Text style={styles.buttonText}>Conecte-se com seu Número</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome style={styles.icon2} name="facebook-official" size={25} color="#fff" />
                    <Text style={styles.buttonText}>Conecte-se com Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <AntDesign style={styles.icon3} name="googleplus" size={25} color="#fff" />
                    <Text style={styles.buttonText}>Conecte-se com Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#f42d56'
    },
    
    containerImage: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    main: {
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10
    },

    header: {
        flexDirection: 'row',
        marginVertical: 10
    },

    emoji: {
        fontSize: 24,
        bottom: 10,
        right: 5
    },

    headerTextTitle: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 21,
        textAlign: 'center',
    },

    headerText: {
        color: '#c4c4c4',
        width: 255,
        fontSize: 13,
        lineHeight: 16,
        alignSelf: 'flex-start',
        left: 15,
        marginVertical: 5
    },

    button: {
        height: 50,
        width: 345,
        backgroundColor: '#f42d56',
        marginVertical: 10,
        borderRadius: 10,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#fff'
    },

    icon: {
        marginRight: 20
    },

    icon2: {
        marginRight: 20,
        right: 8
    },

    icon3: {
        marginRight: 20,
        right: 12
    },

    buttonText: {
        color: '#fff',
        fontSize: 13,
        lineHeight: 16,
        fontWeight: 'bold'
    },
})