import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function Button({ onPress, title }){

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        height: 50,
        width: 180,
        backgroundColor: '#f52d56',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
