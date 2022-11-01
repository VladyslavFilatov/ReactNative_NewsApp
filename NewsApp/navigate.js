import {View, Text} from 'react-native';
import React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main',
            headerStyle: {backgroundColor: '#DB0000', height: 100},
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{title: 'Article'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
