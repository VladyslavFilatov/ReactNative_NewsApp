/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';

const fonts = () =>
  Font.loadAsync({
    'rb-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'rb-light': require('./assets/fonts/Roboto-Light.ttf'),
  });

const App: () => Node = () => {
  const [font, setFont] = useState(false);

  if (font) {
    return (
    <MainStack/>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
};

const styles = StyleSheet.create({});

export default App;
