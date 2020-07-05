import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native'
import { FontAwesome, Entypo, FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

export default function Payment(){
    const [isVisible, setIsVisible] = useState(false)
    const [number, setNumber] = useState('')
    const [pin, setPin] = useState('')

    const navigation = useNavigation()

    function handlePayment(){
        if(number.length === 0 || pin.length === 0){
            Alert.alert('Preencha todos os campos')
        }else{
            Alert.alert('Pagamento efetuado com sucesso!')
        }
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-thin-left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Pagamento</Text>
                </View>

                <Text style={styles.title}>Escolha a melhor forma de pargamento</Text>

                <ScrollView style={styles.paymentContainer} horizontal showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity activeOpacity={0.5} style={styles.paymentForm} onPress={() => setIsVisible(true)}>
                        <FontAwesome5 name="whatsapp-square" size={100} color="#00aa00" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.paymentForm} onPress={() => etIsVisible(true)}>
                        <FontAwesome name="facebook-official" size={100} color="#0000dd" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.paymentForm} onPress={() => etIsVisible(true)}>
                        <AntDesign name="instagram" size={100} color="#7232bd" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.paymentForm} onPress={() => etIsVisible(true)}>
                        <Fontisto name="visa" size={100} color="#4e3b31" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.5} style={styles.paymentForm} onPress={() => etIsVisible(true)}>
                        <FontAwesome name="cc-mastercard" size={100} color="#ee0000" />
                    </TouchableOpacity>
                </ScrollView>

            </ScrollView>

            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
                onRequestClose={() => {
                    setIsVisible(false)
                }}
            >
                <TouchableOpacity activeOpacity={0.5} style={styles.close} onPress={() => setIsVisible(false)}>
                    <AntDesign name="close" size={40} color="#ff0000" />
                </TouchableOpacity>

                <Text style={styles.textTitle}>Pagamento via Whatsapp</Text>
                <TextInput style={styles.input} placeholder="Seu número" keyboardType="numeric" onChangeText={setNumber} />
                <TextInput style={styles.input} placeholder="PIN" keyboardType="numeric" onChangeText={setPin} />

                <TouchableOpacity style={styles.button} onPress={handlePayment}>
                    <Text style={styles.textButton}>Autenticar</Text>
                </TouchableOpacity>

            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },

    header: {
        height: 80,
        backgroundColor: '#f42d56',
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerText: {
        marginLeft: '28%',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    paymentContainer: {
        flex: 1,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#c4c4c4',
        paddingBottom: 15
    },

    paymentForm: {
        height: 100,
        margin: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
    },

    button: {
        alignSelf: 'center',
        height: 50,
        width: 200,
        backgroundColor: '#f52d56',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
        marginVertical: 20
    },

    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    },

    input: {
        marginBottom: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#f42d56',
        borderRadius: 10,
        height: 50,
        width: '90%',
        paddingLeft: 15,
        marginHorizontal: 15,
        color: '#f42d56',
        backgroundColor: '#ffffff',
        marginTop: '10%'
    },

    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 50,
        width: 220,
        lineHeight: 40
    },

    close: {
        margin: 15
    },
})