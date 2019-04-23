import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Id2 from './Id2';
import Id3 from './Id3';
import Id1 from './Id1';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="HOME"
          onPress={() => this.props.navigation.navigate("Id2")
          }
        />
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Id1: {
    screen: Id1,
  },
  Id2: {
    screen: Id2,
  },
  Id3: {
    screen:Id3,
  },
},
 {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);