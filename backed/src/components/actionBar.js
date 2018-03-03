import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
export default class ActionBar extends Component {
    state = {  }
    render() {
        return (
            <View style = {styles.header}>
                <Text>
                    {this.props.title}
                </Text>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
    header:{
        marginTop:30
    }

})