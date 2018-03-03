import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';
import { news_url } from '../configs';
import { apiKey } from "../configs";
import FlatListBasic from '../components/FlatListBasic';

class GoogleNews extends Component {
  static  navigationOptions= {         
        title: 'Google News'
      }
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            isLoading: true,
            source: 'google-news',
            sortBy: 'top',
            newsFeed: ''
        }
    };


    componentDidMount() {
        this.fetchNews();
    }
    fetchNews=async ()=> {
        this.setState({ load: true });
     const res=await fetch(news_url+'?source='+`${this.state.source}`+
     '&sortBy ='+`${this.state.sortBy}`+
     '&apiKey='+apiKey );
     const json= await res.json();
     this.setState({
        isLoading: false,
        newsFeed:  json.articles ,
    });
      
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 40 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatListBasic
                    data={this.state.newsFeed}
                    navigation={this.props.navigation}
                   
                />
            </View>

        )
    }
}
export default GoogleNews