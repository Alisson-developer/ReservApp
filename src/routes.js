import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Slide1 from './pages/Slide1'
import Slide2 from './pages/Slide2'
import Slide3 from './pages/Slide3'
import SelectLogin from './pages/SelectLogin'
import PhoneLogin from './pages/PhoneLogin'
import Session from './pages/Session'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Parking from './pages/Parking'
import Payment from './pages/Payment'

export default function Routes(){

    const AppStack = createStackNavigator()

    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 50,
            mass: 4,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThrehold: 0.01,
        }
    }

    return(
        <NavigationContainer>
            <StatusBar barStyle="light-content" translucent backgroundColor="#f52d56" />
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    gestureEnabled: true, 
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: config,
                        close: config,
                    }
                }}>

                <AppStack.Screen name="Slide1" component={Slide1} />
                <AppStack.Screen name="Slide2" component={Slide2} />
                <AppStack.Screen name="Slide3" component={Slide3} />
                <AppStack.Screen name="SelectLogin" component={SelectLogin} />
                <AppStack.Screen name="PhoneLogin" component={PhoneLogin} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Session" component={Session} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="Parking" component={Parking} />
                <AppStack.Screen name="Payment" component={Payment} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}