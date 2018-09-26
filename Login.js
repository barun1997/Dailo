/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image,Text, TextInput, View} from 'react-native';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {Keyboard,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container, H1,  Header, Body, Content, Card, CardItem, Thumbnail, Right, Title, Left} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Login extends Component<Props> {
    constructor(props){ 
        super(props); 
        this.state={text: 'Enter your name', password: 'Enter your password'};
    }
    onLoginPress (){ 
}
  render() {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={styles.imageLongStyle}
  source={require('./assets/wallpaper.png')}> 
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Dailo</Text>
            <TextInput placeholder={this.state.text} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder={this.state.password} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
          </View>
        </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
 column: { 
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    marginBottom:10, 
  }, 
  row: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom:10, 
  },
  textTitle: { 
      flex:1,
      fontSize: 30,
      marginTop: 30,
      textAlign: 'center',
  },
  textInput: { 
      borderWidth: 2,
      borderRadius: 4,
      flex: 2,
      borderColor: 'red',
  },
  inputBox: { 
    backgroundColor: 'yellow',
    height: 100,
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
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});
