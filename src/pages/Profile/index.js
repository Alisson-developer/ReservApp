import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, ImageBackground } from 'react-native'
import { Octicons, FontAwesome5, Feather, Entypo, FontAwesome, MaterialIcons, Fontisto } from '@expo/vector-icons'
import DatePicker from 'react-native-datepicker'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

import { menu } from './profile.json'
import { timeTable } from './timeTable.json'
import api from '../../services/api'

export default function Profile(){

    const [date, setDate] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [counter, setCounter] = useState(1)
    const [selectItem, setSelectItem] = useState([])
    const [restaurants, setRestaurants] = useState([])

    const navigation = useNavigation()

    useEffect(() => {
        api.get('restaurant').then(response => {
            setRestaurants(response.data.informations)
        })
    }, [])

    const route = useRoute()
    const { name, image } = route.params


    function handleSelectItem( id ){
        setSelectItem([id])
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image}} />
            </View>

            <View style={styles.headerNavigation}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={24} color="#fff" />
                    <Text style={styles.headerNavigationText}>Detalhes do Restaurante</Text>
                </TouchableOpacity>
            </View>

            {restaurants.map((restaurant, index) => (
                <View key={index} style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.title}>Informações</Text>
                        <Text>Restaurante {name}</Text>
                        
                        <View style={styles.verifiedContainer}>
                            <Text style={styles.text}>Verificado   -</Text>
                            { restaurant.verified ? <Octicons style={{marginLeft: 10}} name="verified" size={15} color="#00dd00" /> : <Octicons style={{marginLeft: 10}} name="unverified" size={15} color="#ff0000" /> }
                        </View>        
                </View>

                <View style={styles.headerRight}>
                    <Text style={{fontSize: 14, color: '#f42d56'}}>{restaurant.open ? 'Aberto agora': 'Fechado'}</Text>
                    <View style={styles.stars}>
                        <FontAwesome5 name="star" size={12} color="#f42d56" />
                        <FontAwesome5 name="star" size={12} color="#f42d56" />
                        <FontAwesome5 name="star" size={12} color="#f42d56" />
                        <FontAwesome5 name="star" size={12} color="#c4c4c4" />
                    </View>
                    <Text style={{fontSize: 12, color: '#c4c4c4'}}>356 Feedbacks</Text>
                </View>
            </View>
            ))}
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                <Text style={styles.titleDetail}>Detalhes</Text>
                {
                    restaurants.map((restaurant, index) => (
                        <View key={index}>
                            <Text style={styles.details}>{restaurant.details}</Text>

                            <View style={styles.containerIcons}>
                                <View style={styles.icon}>
                                    <MaterialIcons name="smoke-free" size={24} color={restaurant.smokeArea ? "#f42d56" :"#c4c4c4"} />
                                    <Text style={styles.textIcon}>Area de fumantes</Text>
                                </View>
                                <View style={styles.icon}>
                                    <FontAwesome name="wheelchair" size={24} color={restaurant.smokeArea ? "#f42d56" :"#c4c4c4"} />                        
                                    <Text style={styles.textIcon}>Acesso a cadeirantes</Text>
                                </View>
                                <View style={styles.icon}>
                                    <Fontisto name="snowflake-8" size={24} color={restaurant.smokeArea ? "#f42d56" :"#c4c4c4"} />
                                    <Text style={styles.textIcon}>Ambiente climatizado</Text>
                                </View>
                            </View>
                        </View>
                    )
                )}

                <View style={styles.horizontal}>
                    <Text style={styles.titleDetail}>Quantidade de pessoas</Text>
                    <TouchableOpacity onPress={() => setCounter(counter+1)}>
                        <Feather name="plus-circle" size={24} color="#f42d56" />
                    </TouchableOpacity>

                    <Text style={styles.titleDetail}>{counter}</Text>
                
                    <TouchableOpacity onPress={() => setCounter(counter > 1 ? counter-1 : 1)}>
                        <Feather name="minus-circle" size={24} color="#f42d56" />
                    </TouchableOpacity>
                </View>

                <View style={styles.horizontal}>
                    <Text style={styles.titleDetail}>Selecione a data da reserva</Text>
                    <DatePicker 
                        format="DD/MM/YYYY"
                        style={styles.datePicker}
                        showIcon={false}
                        date={date}
                        onDateChange={setDate}
                    />
                </View>
                <View style={styles.timeTableContainer}>
                    <Text style={styles.timeTableTitle}> Selecione o horário</Text>
                    <FlatList 
                        data={timeTable}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={time => time.id}
                        renderItem={({item: time}) => (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => handleSelectItem(time.id)} style={selectItem.includes(time.id) ? styles.timeTableSelected : styles.timeTable}>
                                <Text style={selectItem.includes(time.id) ? styles.timeTableSelectText : styles.timeTableText}>{time.time}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => setIsVisible(true)}>
                    <Text style={styles.textButton}>Escolher Menu</Text>
                </TouchableOpacity>

            </ScrollView>
            

        <Modal 
            animationType="slide"
            visible={isVisible}
            transparent={true}
            onRequestClose={() => {
                setIsVisible(false)
            }}
        >

            <ImageBackground source={{uri : 'https://image.freepik.com/vetores-gratis/fundo-branco-textura-elegante_23-2148415643.jpg'}} 
                style={styles.containerModal}>
                <View style={styles.headerNavigationModal}>

                <TouchableOpacity style={styles.arrowLeft} onPress={() => setIsVisible(false)}>
                    <Entypo name="chevron-thin-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerNavigationTextModal}>Cardápio</Text>
                
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        menu.map((men, index) => (
                            <TouchableOpacity key={index} onPress={() => {setIsVisible(false), navigation.navigate('Payment')}} activeOpacity={0.6}>
                                <View style={styles.card}>
                                    <Image style={styles.cardImage} source={{ uri: men.image }} />
                                    <View style={styles.figcaption}>
                                        <Text style={styles.figcaptionText1}>{men.name}</Text>
                                        <Text style={styles.figcaptionText2}>{men.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }

                    <View style={styles.footer}></View>
                </ScrollView>
            </ImageBackground>

        </Modal>
            

    </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: 70
    },

    headerNavigation: {
        width: '100%',
        position: 'absolute',
        backgroundColor: '#f42d56',
        justifyContent: 'flex-end',
        height: 70,
        paddingVertical: 10,
        paddingLeft: 10
    },

    headerNavigationText: {
        position: 'absolute',
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },

    image: {
        width: '100%',
        height: '100%'
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 20,
        color: '#f42d56'
    },

    text: {
        color: '#808080'
    },

    header: {
        position: 'absolute',
        marginVertical: 20,
        marginHorizontal: 20,
        paddingBottom: 20,
        width: '90%',
        top: '40%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3
    },

    imageContainer: {
        width: '100%',
        height: 250,
    },

    verifiedContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    stars: {
        flexDirection: 'row',
        marginTop: 10
    },

    headerRight: {
        alignItems: 'flex-end'
    },

    body: {
        marginTop: 50,
        paddingHorizontal: 15
    },

    details: {
        color: '#c4c4c4'
    },

    titleDetail: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    containerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 21,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#e9e9e9',
        paddingBottom: 20
    },

    icon: {
        alignItems: 'center'
    },

    textIcon: {
        width: 75,
        textAlign: 'center',
        marginTop: 5,
        color: '#c4c4c4'
    },

    horizontal: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    datePicker: {
        width: 130,
        backgroundColor: '#f42d56aa',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 15,
        elevation: 2
    },

    timeTableContainer: {
        marginVertical: 10
    },

    timeTableTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    timeTableSelected: {
        marginHorizontal: 10,
        marginVertical: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 12,
        backgroundColor: '#f42d56'
    },

    timeTable: {
        marginHorizontal: 10,
        marginVertical: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#f42d56',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 12
    },

    timeTableSelectText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },

    timeTableText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f42d56'
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

    containerModal: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },

    card: {
        width: '90%',
        height: 180,
        alignSelf: 'center',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 8,
        borderColor: '#f42d56',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    
    cardImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,        
    },

    figcaption: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-between',
    },

    figcaptionText1: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#f42d56',
        paddingLeft: 15,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 5,
        borderTopRightRadius: 30
    },
    
    figcaptionText2: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#f42d56',
        paddingRight: 20,
        right: 8,
        bottom: 8,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingTop: 10,
        borderBottomRightRadius: 60,
        borderTopLeftRadius: 30
    },

    headerNavigationModal: {
        width: '100%',
        backgroundColor: '#f42d56',
        justifyContent: 'flex-end',
        height: 70,
        paddingVertical: 10,
        paddingLeft: 10,
        elevation: 5
    },

    headerNavigationTextModal: {
        position:'absolute',
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        bottom: 20,
    },

    arrowLeft: {
        position: 'absolute',
        top: 20,
        paddingLeft: 10
    },

    footer: {
        height: 50
    },
})