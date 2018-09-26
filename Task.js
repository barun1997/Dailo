/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Text, TextInput, View, DatePickerIOS} from 'react-native';
import {ImageBackground} from 'react-native';
import {Keyboard,TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

type Props = {};

export default class Task extends Component<Props> {

    constructor(props){ 
        super(props);
        this.state={taskName: 'eg: Pickup groceries', taskLocation: 'eg: Budhanilkantha', taskTime: new Date()};
        this.setDate= this.setDate.bind(this);
        this.onsignUpPress = this.onsignUpPress.bind(this);
        this.handleTaskName= this.handleTaskName.bind(this);
        this.handleTaskLocation= this.handleTaskName.bind(this);
    }
setDate(newDate) {
    this.setState({taskTime: newDate})
  }
  onsignUpPress(value) { 
  }
  handleTaskName = (value) =>  { this.setState({ taskName: value})} 
  handleTaskLocation = (value) =>  { this.setState({ taskLocation: value})} 
  render() {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={styles.imageLongStyle}
  source={require('./assets/taskwallpaper.jpg')}> 
        <View style={styles.taskScreenContainer}>
          <View style={styles.taskFormView}>
          <Text style={styles.taskText}>Enter the task</Text>
            <TextInput placeholder="What can we do for you?" onChangeText ={this.handleTaskName} placeholderColor="#c4c3cb" style={styles.taskFormTextInput} />
            <TextInput placeholder="Mention the location of task" textContentType="location" onChangeText= {this.handleTaskLocation}placeholderColor="#c4c3cb" style={styles.taskFormTextInput}/>
            <View style={[styles.container]}>
            <Text style={styles.textTitle}> Time for your task </Text>
        <DatePickerIOS
          date={this.state.taskTime}
          onDateChange={this.setDate}
        />
        </View>
            <Button
              buttonStyle={styles.submitButton}
              onPress={([value]) => this.onsignUpPress()}
              title="Post your task"
            />
          </View>
        </View>
        <Text>Hello, {this.taskName}{this.taskLocation}{this.taskTime}</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  imageLongStyle: { 
    flex:1,
    alignSelf: 'stretch',
    height: undefined, 
    width: undefined, 
    resizeMode: 'stretch',
   },
  containerView: {
    flex: 1,
  },
  taskScreenContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  taskFormView: {
    flex: 1
  },
  taskFormTextInput: {
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
  submitButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
});
