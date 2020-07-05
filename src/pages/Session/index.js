import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'

import Logo from '../../assets/reserv-logo.png'
import { restaurantList } from './restaurants'
import { parkingsVacancy } from './parking'

export default function ValidateLogin(){

    const [initialPosition, setInitialPosition] = useState([0, 0])
    const [restaurantName, setRestaurantName] = useState('')
    const [parkingName, setParkingName] = useState('')

    useEffect(() => {
        async function loadPosition(){
            const { status } = await Location.requestPermissionsAsync()
            if(status !== 'granted'){
                Alert.alert('Precisamos da sua permissão para obter a localização')
                return
            }

            const location = await Location.getCurrentPositionAsync()

            const { latitude, longitude } = location.coords

            setInitialPosition([latitude, longitude])
        }
        loadPosition()
    }, [])

    const navigation = useNavigation()

    function handleNavigateToDetail(name, image){
        navigation.push('Profile', { name, image })
    }
    
    function handleNavigateToParking(name, image){
        navigation.push('Parking', { name, image })
    }

    const filteredRestaurantList = restaurantList.filter(restaurant => restaurant.name.includes(restaurantName))
    const filteredParkingList = parkingsVacancy.filter(parking => parking.name.includes(parkingName))

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                { initialPosition[0] !== 0 && (
                    <MapView 
                    style={styles.map}
                    initialRegion={{
                        latitude: initialPosition[0],
                        longitude: initialPosition[1],
                        latitudeDelta: 0.14,
                        longitudeDelta: 0.14
                    }}
                    >
                        {
                            filteredRestaurantList.map((restaurant) => (
                                <Marker key={restaurant.id} onPress={() => {handleNavigateToDetail(restaurant.name, restaurant.imageUrl)}} coordinate={{
                                    latitude: restaurant.latitude,
                                    longitude: restaurant.longitude,
                                }}>
                                    <View style={styles.imageContainerMarker}>
                                        <Image style={styles.imageMarker} source={{ uri: `${restaurant.imageUrl}`}} />
                                    </View>
                                </Marker>
                            ))
                        }
                        {
                            filteredParkingList.map((parking) => (
                                <Marker key={parking.id} onPress={() => {handleNavigateToParking(parking.name, parking.imageUrl)}} coordinate={{
                                    latitude: parking.latitude,
                                    longitude: parking.longitude,
                                }}>
                                    <View style={styles.imageContainerMarkerParking}>
                                        <Image style={styles.imageMarker} source={{ uri: parking.imageUrl}} />
                                    </View>
                                </Marker>
                            ))
                        }
                    </MapView>
                )}

                <View style={styles.header}>
                    <Image source={Logo} resizeMode="contain" style={styles.image} />
                    <Text style={styles.title}></Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder=" Buscar restaurante"
                        placeholderTextColor="#eee"
                        onChangeText={setRestaurantName}
                    />
                    
                    <TextInput 
                        style={styles.textInput}
                        placeholder=" Buscar estacionamento"
                        placeholderTextColor="#eee"
                        onChangeText={setParkingName}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },

    textInput: {
        marginBottom: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        height: 50,
        width: '90%',
        paddingLeft: 15,
        marginHorizontal: 15,
        color: '#f42d56',
        backgroundColor: '#ffffff'
    },

    mapContainer: {
        flex: 1,
    },

    map: {
        width: '100%',
        height: '100%'
    },

    image: {
        alignSelf: 'flex-start',
        marginTop: 35,
        height: 25,
    },

    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#f42d56',
        paddingBottom: 10,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        width: '100%',
        height: 400,
        bottom: -300,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    buttonModal: {
        backgroundColor: '#f42d56',
        width: 50,
        height: 50,
        borderRadius: 100 / 0.5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },

    closeModal: {
        position: 'absolute',
        marginTop: 25,
        marginLeft: 25
    },

    imageMarker: {
        width: '100%',
        height: '100%'
    },

    imageContainerMarker: {
        borderRadius: 20,
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#f42d56'
    },

    imageContainerMarkerParking: {
        borderRadius: 20,
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#0000dd'
    },
})