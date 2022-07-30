import * as React from 'react';
import { Text, View,StyleSheet,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Badge } from "react-native-paper";
import Count from '../countdown/Countdown';
// import Pro from '../profile/Profile';

function HomeScreen({navigation}) {
  const onPress =()=>{
    navigation.navigate('Supervisorlist')
  }
  const onPress1 =()=>{
    navigation.navigate('Proposal')
  }
  const onPress2 =()=>{
    navigation.navigate('Srs')
  }
  const onPress3 =()=>{
    navigation.navigate('Mdefence')
  }
  const onPress4=()=>{
    navigation.navigate('Fdefence')
  }
  return (
    <View >
      <Card style={styles.supervisor} >
            <Text  style={styles.supervisortxt} onPress={onPress}> Select supervisor</Text> 
            <Text  style={styles.time} >  Time Remaining</Text> 
            <Count/>
            <View style={styles.logo}>
                 <Image style={styles.lgu} source={require("../../assets/Rarrow.png")} />
               </View>
            </Card>
            <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress1}>Project Proposal</Text> 
            </Card>
            <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress2}>SRS</Text> 
            </Card>
            <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress3}>Mid Defence</Text> 
            </Card>
            <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress4}>Final Defence</Text> 
            </Card>
            {/* <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress4}>Supervisor Check</Text> 
            </Card> */}
    </View>
  );
}

// function SettingsScreen() {
   
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

function Profile({navigation}) {
  const onPress =()=>{
    navigation.navigate('Request')
  }

  const onPress1 =()=>{
    navigation.navigate('Usergroup')
  }
  return (
    <View  > 
           <View>
              <Card style={styles.card1} >
            <Text  style={styles.request} onPress={onPress}> Requests</Text><Badge style={styles.badge} >3</Badge>
            </Card>

            <Card style={styles.card1} >
            <Text  style={styles.request} onPress={onPress1}> Group</Text> 
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
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
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
  alignContent:'center',
},
request:{
 marginTop:10,
 marginLeft:20,
 fontSize:20,
 fontWeight:'bold',
},
badge:{
marginTop:-21,
marginRight:10,
},
supervisor:{
  height:170,
  width:330,
  marginTop:30,
  borderRadius:7,
  marginLeft:15 ,
 
},
supervisortxt:{
  marginTop:25,
  marginLeft:30,
  fontSize:20,
  fontWeight:'bold',
},
 time:{
  marginLeft:30,
  marginTop:30,
 },
 logo: {
  marginLeft:260,
  marginTop:-95,
},
lgu: {
  height: 40,
  width: 40,
},
proposal:{
  marginTop:10,
  height: 70,
  width: 330,
  marginLeft:15,
  borderRadius:7,
},
proposaltxt:{
 fontWeight:'bold',
 marginTop:23,
 textAlign:'center',
},
});