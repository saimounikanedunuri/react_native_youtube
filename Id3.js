import React from 'react';
import data from './data.json';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from "react-navigation";

class Id3 extends React.Component {
    hey = (video) => {
        this.props.navigation.navigate("Id1", { video: video.thumbnil,...this.props });

    }
    render() {
        const video = this.props.video;
        return (
            <View>
                <TouchableOpacity onPress={() => this.hey(video)} >
                    <Image source={{ uri: video.thumbnil }} style={{ width: 250, height: 200 }} />
                </TouchableOpacity>
                <Text>{video.name}</Text>
                <Text style={{ marginBlockStart: "-0.8rem", marginBlockEnd: "-0.67em" }}>Published By: {video.postedBy}</Text>
                <Text>{video.views} Views</Text>
            </View>)
    }
}

export default withNavigation(Id3);