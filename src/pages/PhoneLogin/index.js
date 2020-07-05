import React, { useState } from 'react'
import { View, Text, TextInput, Modal, TouchableOpacity, Image, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import ButtonModal from '../../components/ButtonModal'

import styles from './styles'

export default function PhoneLogin({navigation}){
    const [isVisible, setIsVisible] = useState(false)
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')


    return (
        <>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    setIsVisible(false)
                }}
            >
                <View style={styles.containerModal}>
                    <View style={styles.modalMain}>
                        
                        <Text style={styles.titleModal}>Conecte-se com seu número</Text>
                        <Text style={styles.textNumber}>+55 {number}</Text>
                        <Text style={styles.subTitleModal}>Nós enviaremos o código de autenticação para o número de telefone digitado. Deseja continuar?</Text>
                        
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => setIsVisible(false)}>
                                <Text style={styles.textButton}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonSubmit} onPress={() => {
                                    navigation.push('Login', { number })
                                    setIsVisible(false)
                                }}>
                                <Text style={styles.textSubmit}>Enviar SMS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            
            <View style={styles.container}>

                <TouchableOpacity style={styles.arrowLeft} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={25} color="#f42d56" />
                </TouchableOpacity>

                <Text style={styles.title}>Adicione seu nome e número</Text>
                <Text style={styles.subTitle}>Digite o número do seu telefone para usar o Reserv</Text>

                <TextInput 
                    style={styles.inputNumber}
                    placeholder="Nome"
                    onChangeText={setName}
                />

                <TextInput 
                    style={styles.inputNumber} 
                    keyboardType="numeric"
                    placeholder="Ex.: 081 99999-9999"
                    onChangeText={setNumber}
                />

                <ButtonModal title="Continuar" onPress={() => {
                    if(number.length === 0 || name.length === 0){
                        Alert.alert('Por favor preencha todos os campos!')
                    }else{setIsVisible(true)}}} />
            </View>

        </>
    )
}
