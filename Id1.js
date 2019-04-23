import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import data from './data.json'
import Id4 from './Id4';


export default class Id1 extends Component {
  render() {
    console.log("HTYYYYYYYYYYYYYYYYYYY", data);
    return (
      <View>
        {data.map((data) => {
          return (
            <Id4 video={data} />
          )
        })
        }
      </View>
    );
  }
}