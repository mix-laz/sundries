import React, { Component } from 'react';
import { View, Text, ToolbarAndroid } from 'react-native'
export default class Toolbar extends Component {
    state = {}
    render() {
        return (
            <ToolbarAndroid                
                title= { this.props.title }                        
            >           
            </ToolbarAndroid >
        )
    }
}