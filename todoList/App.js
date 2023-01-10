import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import Styles from "./styles/Styles";

function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={Styles.container}>
      
      {/* Today's Tasks */}
      <View style={Styles.taskWrapper}>
        <Text style={Styles.sectionTitle}>Today's Tasks</Text>

        <View style={Styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              ) 
            })
          }

        </View>

      </View>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.writeTaskWrapper}
      >
          <TextInput style={Styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={Styles.addWrapper}>
              <Text style={Styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
          </KeyboardAvoidingView>
      
      </View>
  );
}

export default App;
