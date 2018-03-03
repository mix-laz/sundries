import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { List,ListItem } from 'react-native-elements'
import RowItem from './RowItem'
class FlatListBasic extends Component   {  
    constructor(props){
        super(props);
    }
    
    render(){   
        const {navigate} =this.props.navigation;
        return (
            <List containerStyle={{
                flex: 1, marginTop: 10, borderTopWidth: 0,
                borderBottomWidth: 0, borderBottomColor: '#FFDD00'
            }}>

                <FlatList
                    style={styles.container}
                    data={this.props.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        subtitle={item.publishedAt}
                        avatar={{ uri: item.urlToImage }}
                        onPress={() => navigate('NewsDetail', { url: item.url })}
                    />}
                    keyExtractor={(item, index) => index}
                >
                </FlatList>
            </List>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    }
})


export default FlatListBasic