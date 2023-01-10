import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskStyles from "../styles/TaskStyles";
const Task = (props) => {

    return (
        <View style={TaskStyles.item}>
            <View style={TaskStyles.itemLeft}>
                <View style={TaskStyles.square}></View>
                <Text style={TaskStyles.itemText}>{props.text}</Text>
            </View>
            <View style={TaskStyles.circular}></View>
        </View>
    )
}

export default Task;