import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Button,
} from 'react-native';
import {gStyle} from '../styles/style';
import {Icon} from 'react-native-vector-icons';
import {Ionicons} from '@expo/vector-icons';
import Form from './Form';

export function Main({navigation}) {
  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'New update of Android!!!',
      full: 'Google is cool!',
      key: '1',
      img: 'https://img.olhardigital.com.br/wp-content/uploads/2021/11/denny-muller-HfWA-Axq6Ek-unsplash-1.jpg',
    },
    {
      name: 'Apple',
      anons: 'New update of Sfiwt!!!',
      full: 'Apple is cool!',
      key: '2',
      img: 'https://t3.ftcdn.net/jpg/02/47/68/40/360_F_247684090_RatcCjfIt8D5oXkgVFgr3JtVUnWMjdu1.jpg',
    },
    {
      name: 'FaceBook',
      anons: 'New update of React Native!!!',
      full: 'FaceBook is cool!',
      key: '3',
      img: 'https://www.futuremind.com/m/articles/none/react_native_vs_native_apps_kJeZgPh.png',
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [
        article,
        ...list
      ];
    });
    setModalWindow(false);
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Button
            color="#EF0027"
            onPress={() => setModalWindow(false)}
            title="Close"
          />
          <Text style={styles.title}>Form for adding articles</Text>
          <Form addArticle={addArticle}/>
        </View>
      </Modal>
      <Button
        // style={styles.ButtonAdd}
        color="#09EF00"
        onPress={() => setModalWindow(true)}
        title="Add Articles"
      />
      {/* <Ionicons
        name="close-circle"
        size={34}
        color="black"
        style={styles.iconAdd}
      /> */}
      <Text style={[gStyle.title, styles.header]}>Main page</Text>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('FullInfo', item)}>
            <Image style={styles.image} source={{uri: item.img}} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonAdd: {
    color: '#000DEF',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    color: '#282828',
  },
  anons: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    color: '#282828',
  },
});

export default Main;
