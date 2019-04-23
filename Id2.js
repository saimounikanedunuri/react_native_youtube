import React from 'react';
import data from './data.json';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from "react-navigation";
import Id3 from './Id3';
import Id1 from './Id1';

export default class Id2 extends React.Component {
    render() {
        return (
            <ScrollView>
                {data.map(function (video) {
                    return (
                        <View>
                        <Id3 video={video} {...this.props} />
                        </View>
                    )
                }
                )}
                {/* {data.map(function (data1) {
                    return (
                        <View>
                        <Id1 data1={data1} {...this.props} />
                        </View>
                    )
                }
                )} */}
            </ScrollView>
        )
    }
}