import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './assets/navigator/MainStack'

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

/** ========================================================================== 
 * O react-native tem 3 tipos de telas:
 * - Stack
 * - Tab
 * - Drawer
 */