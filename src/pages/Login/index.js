import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'


export default function Login(){
    const navigation = useNavigation()

    const route = useRoute()

    const { number } = route.params
    console.log(number)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.goBack()}>
                <Entypo name="chevron-thin-left" size={25} color="#f42d56" />
            </TouchableOpacity>
            <Text style={styles.title}>Verificação de código</Text>
            <Text style={styles.subTitle}>O cógido de verificação foi enviado para</Text>
            <Text style={styles.textNumber}>+55 {number}</Text>
            
            <TextInput 
                    style={styles.inputNumber} 
                    keyboardType="numeric"
                />
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Session')}>
                <Text style={styles.textButton}>Continuar</Text>
            </TouchableOpacity>

            <View style={styles.containerText}>
                <Text style={styles.text}>Não recebeu seu código?</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.textBold}>Reenviar código</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    arrowLeft: {
        position: 'absolute',
        left: 15,
        top: 50
    },

    title: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: 'bold',
        marginTop: 120,
        marginLeft: 15,
        marginBottom: 15
    },

    subTitle: {
        fontSize: 16,
        lineHeight: 18,
        marginLeft: 15,
        color: '#c4c4c4'
    },

    textNumber: {
        fontSize: 16,
        lineHeight: 18,
        color: '#232323',
        fontWeight: '600',
        marginTop: 5,
        marginLeft: 15
    },

    inputNumber: {
        alignSelf: 'center',
        width: 230,
        height: 50,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#c4c4c4',
        paddingLeft: 15,
        marginVertical: 40,
    },

    button: {
        alignSelf: 'center',
        height: 50,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 2,
        backgroundColor: '#f42d56'
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    },

    containerText: {
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center'
    },

    text: {
        fontSize: 15,
        lineHeight: 17,
        color: '#c4c4c4'
    },

    textBold: {
        fontSize: 13,
        lineHeight: 15,
        color: '#232323',
        fontWeight: '600',
        marginLeft: 10,
        color: '#0000ff',
    },
})