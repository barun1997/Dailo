/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import {Platform, StyleSheet, Image,Text, View} from 'react-native';
import {ImageBackground, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container, H1, Header, Body, Content, Card, CardItem, Thumbnail, Right, Title, Left} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container> 
      <Header> 
        <Left/> 
        <Body><Image
  style={styles.logoStyle}
  source={require('./assets/logo.png')}>
</Image></Body> 
          <Right /> 
          </Header> 
      <Content> 
      <Text style={styles.welcome}> Choose one of our services </Text>
        <View style={styles.row}>
        <View style={styles.box}>
        <TouchableOpacity style={styles.imageStyle}><Image
  style={styles.imageStyle}
  source={require('./assets/sss.png')}>
</Image></TouchableOpacity></View>


        <View style={styles.box}>
        <TouchableOpacity style={styles.imageStyle}>
        <Image
  style={styles.imageStyle}
  source={require('./assets/ss2.png')}>
</Image>
</TouchableOpacity></View>
        </View>

        <View style={styles.row}>
        <View style={styles.box}>
        <TouchableOpacity style={styles.imageStyle}>
        <Image
  style={styles.imageStyle}
  source={require('./assets/ss3.png')}>
</Image></TouchableOpacity></View>
        <View style={styles.box}>
        <TouchableOpacity style={styles.imageStyle}>
        <Image
  style={styles.imageStyle}
  source={require('./assets/ss4.png')}>
</Image>
</TouchableOpacity></View>
        </View>
        <View style={styles.row}>
        <View style={styles.boxlong}>
        <TouchableOpacity style={styles.imageLongStyle}>
        <Image
  style={styles.imageLongStyle}
  source={require('./assets/ss5.png')}>
</Image>
</TouchableOpacity></View> 
        </View> 
        </Content>
      </Container> 
    );
  }
}

const styles = StyleSheet.create({
  row: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom:10, 
  }, 
  imageStyle: { 
   flex:1,
   alignSelf: 'stretch',
   height: undefined, 
   width: undefined, 
   resizeMode: 'contain',
  },
  logoStyle: { 
    flex:1,
    alignSelf: 'stretch',
    height: undefined, 
    width: undefined, 
    resizeMode: 'stretch',
   },
  imageLongStyle: { 
    flex:1,
    alignSelf: 'stretch',
    height: undefined, 
    width: undefined, 
    resizeMode: 'stretch',
   },
  box: { 
    flex:1, 
    height: 150, 
    marginLeft: 10,
    marginRight: 10,
  },
  
  boxlong: { 
    flex:1, 
    height: 150,
    marginLeft: 10,
    marginRight: 10,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#89cff0',
    margin: 10,
  },
});
