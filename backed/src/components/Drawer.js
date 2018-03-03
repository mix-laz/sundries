import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DrawerItem from './DrawerItem';
import Divider from './Divider';
import { Container, Header, Content, Left, Right, Footer, Icon, Body, Title } from 'native-base';
 

export default class Drawer extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
    componentWillMount() {
    
  }

  render() {    
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Main menu</Title>
          </Body>
          <Right />
        </Header>

        <Content style={styles.content}>
          <DrawerItem style={styles.drawerItem}
            onPress={() => navigate('Marijuana')}
            title="Marijuana news"
          />
          <Divider style={styles.divider}></Divider>

          <DrawerItem style={styles.drawerItem}
            onPress={() => navigate('GoogleNews')}
            title="Google News"
          />

          <Divider style={styles.divider}></Divider>
          <DrawerItem
            style={styles.drawerItem}
            onPress={() => navigate('Weather')}
            title="Weather"
          />
          <Divider style={styles.divider}></Divider>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'

  },
  content: {
    flex: 1,
    backgroundColor: '#755C46',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20
  },
  header: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 20,
  },
  drawerItem: {
    marginTop: 40,
    color: '#fff',
    fontSize: 15
  },
  divider: {
    height: 1,
    backgroundColor: '#FFF',
    marginTop: 5

  }
});