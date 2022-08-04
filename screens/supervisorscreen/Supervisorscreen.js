import * as React from 'react';
import { Text, View,StyleSheet,ScrollView,SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Badge } from "react-native-paper";
 
 

function HomeScreen({navigation}) {
  const onPress =()=>{
    navigation.navigate('Studentrequest')
  }
  const onPress1 =()=>{
    navigation.navigate('Acceptedlist')
  }
 
  return (
     
    <View >
      <ScrollView>
        <SafeAreaView>
       
      <Card style={styles.supervisor} >
            <Text  style={styles.supervisortxt} onPress={onPress}>Requests</Text><Badge style={styles.badge}>11</Badge>
          
            </Card>
             <Card style={styles. proposal}>
            <Text  style={styles.acceptedtxt} onPress={onPress1}>Accepted List</Text> 
            </Card>
            {/*<Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress2}>SRS</Text> 
            </Card>
            <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress3}>Mid Defence</Text> 
            </Card>
            <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress4}>Final Defence</Text> 
            </Card>
            <Card style={styles. proposal}>
            <Text  style={styles.proposaltxt} onPress={onPress5}>Supervisor Check</Text> 
            </Card> */}
             </SafeAreaView>
             </ScrollView>
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

// function Profile({navigation}) {
//   const onPress =()=>{
//     navigation.navigate('Request')
//   }

//   const onPress1 =()=>{
//     navigation.navigate('Usergroup')
//   }
//   return (
//     <View  > 
//            <View>
//               <Card style={styles.card1} >
//             <Text  style={styles.request} onPress={onPress}> Requests</Text><Badge style={styles.badge} >3</Badge>
//             </Card>

//             <Card style={styles.card1} >
//             <Text  style={styles.request} onPress={onPress1}> Group</Text> 
//             </Card>
//           </View>  
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function SuperBottom({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
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
  height:70,
  width:330,
  marginTop:30,
  borderRadius:7,
  marginLeft:15 ,
 
},
supervisortxt:{
  marginTop:20,
  marginLeft:30,
  fontSize:20,
//   fontWeight:'bold',
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
acceptedtxt:{
    marginTop:20,
    marginLeft:30,
    fontSize:20,
    // fontWeight:'bold',
},
badge:{
    marginTop:-21,
    marginRight:10,
    },
});