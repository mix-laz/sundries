import React, { Component } from 'react'
import {View  } from 'react-native'
class Marijuana extends Component {
    state = {       
        search: ' ',      
        newsFeed: {
            items: []
        
    } }
    componentDidMount(){
        this.search();
    }
    search(){
        this.setState({load:true});
        fetch
    }
    render() {
        return (
<View>
</View>
            
        )
    }

}

export default Marijuana