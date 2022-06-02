import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, List,Badge } from "react-native-paper";
// import Pro from '../profile/Profile';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
   
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Profile({navigation}) {
  const onPress =()=>{
    navigation.navigate('Request')
  }
  return (
    <View  > 
           <View>
              <Card style={styles.card1} >
            <List.Item  />          
            <Text  style={styles.request} onPress={onPress}>  Requests</Text><Badge style={styles.badge} >3</Badge>
            </Card>
          </View>  
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Bottom({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
card1:{
  height:50,
  width:350,
  marginTop:30,
  marginLeft:5 ,
},
request:{
 marginTop:-40,
 marginLeft:20,
 fontSize:20,
 fontWeight:'bold',
},
badge:{
marginTop:-21,
marginRight:10,
},
});