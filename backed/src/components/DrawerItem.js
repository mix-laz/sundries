import { View,Text,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
class DrawerItem extends Component {
    state = {  }
    render() {
        return (
            <TouchableOpacity
            onPress={this.props.onPress}>                  
                 <Text style={this.props.style}>{this.props.title}</Text>
            </TouchableOpacity>            
        );
    }
}

export default DrawerItem