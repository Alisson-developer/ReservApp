import React from 'react'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
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
        alignSelf: 'flex-start',
        left: 15,
        marginBottom: 15
    },

    subTitle: {
        width: 185,
        alignSelf: 'flex-start',
        left: 15,
        fontSize: 12,
        lineHeight: 14,
        color: '#c4c4c4',
        marginBottom: 30
    },
    
    inputNumber: {
        width: 345,
        height: 50,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#c4c4c4',
        paddingLeft: 15,
        marginVertical: 10,
    },

    containerModal: {
        backgroundColor: '#00000077',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        height: 50,
        width: 120,
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
        elevation: 2
    },

    textButton: {
        color: '#f42d56',
        fontWeight: 'bold'
    },

    modalMain: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },

    buttonSubmit: {
        height: 50,
        width: 120,
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
        backgroundColor: '#f42d56',
        marginLeft: 20
    },

    textSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 16
    },

    textNumber: {
        color: '#f42d56',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '500',
        marginVertical: 20
    },

    titleModal: {
        fontSize: 20,
        lineHeight: 29,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20
    },

    subTitleModal: {
        width: 275,
        alignSelf: 'center',
        fontSize: 12,
        lineHeight: 14,
        color: '#c4c4c4'
    },

    imageContainer: {
        flex: 1,
        position: 'absolute',
    },

    imageBackground: {
        height: 400,
    }
})

export default styles