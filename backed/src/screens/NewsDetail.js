import React, { Component } from 'react';
import { WebView, StyleSheet, ActivityIndicator, View } from 'react-native';

class NewsDetail extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        const { params } = this.props.navigation.state;
        console.log("navigation= "+typeof this.props.navigation);
        return (
            <WebView
               // renderLoading={ this.renderIndicator}
               // startInLoadingState 
                source={{ uri: params.url }}
                style={styles.webView}
            />
        );
    }
}
renderIndicator = () => {
    <View style={{ flex: 1, paddingTop: 40 }}>
        <ActivityIndicator  size="small" color="#00aa00"/>
    </View>
}

const styles = StyleSheet.create({
    webView: {
        flex: 1
    }
});

export default NewsDetail;