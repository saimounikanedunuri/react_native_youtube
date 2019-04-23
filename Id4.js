import React, { Component } from 'react';
import { WebView, View,Text } from 'react-native';


export default class Id4 extends Component {
    render() {
        console.log("hiiiii", this.props.video)
        return (
          <View>
          <Text>
          {this.props.video.vidid}
          </Text>
          </View>
        )
    }
}