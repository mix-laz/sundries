import React,{ Component} from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';
import { List, ListItem } from 'react-native-elements'

class RowItem extends Component {  
  constructor(props) {
    super(props);
  };
  render() {   
    return
    <ListItem
      title={this.props.title}
      subtitle={this.props.publishedAt}
      avatar={{ uri: this.props.urlToImage }}
    />
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});


export default RowItem;