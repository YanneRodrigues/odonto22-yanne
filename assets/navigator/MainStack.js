import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'
import ForgotPasswordScreen from '../pages/ForgotPassword'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Entrar',
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#000080',
          height: 55
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 23,
          fontWeight: 'bold'
        }
      }}/>
      <MainStack.Screen name='About' component={AboutScreen} options={
        ({route})=>({
          title: route.params?.name,
          
        })
      }/>
      <MainStack.Screen name='ForgotPassword' component={ForgotPasswordScreen} /> 
    </MainStack.Navigator>
  )
}