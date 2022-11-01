import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {gStyle} from '../styles/style';

export function Contacts({route}) {
  //   const loadScene = () => {
  //     navigation.goBack();
  //   };

  return (
    <View style={gStyle.main}>
      <Image style={styles.image} source={{uri: route.params.img}} />
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  full: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#000CDB',
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
});

export default Contacts;
