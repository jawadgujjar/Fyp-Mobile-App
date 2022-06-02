import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
 
} from "react-native";
import { Card, List,Badge } from "react-native-paper";
 
 function Pro({navigation}) {

  const onPress =()=>{
    navigation.navigate('Login')
  }
 
  return (
    <View>
      <ScrollView>
        <SafeAreaView>
          <StatusBar backgroundColor="#2085A8" barStyle="light-content" />

          <View>
              <Card style={styles.card1} >

            <List.Item
            
            />          
            <Text  style={styles.request} onPress={onPress}>  Requests</Text><Badge style={styles.badge} >3</Badge>
            </Card>
          </View>
           
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
export default Pro;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginTop: "20%",
    width: "90%",
  },
  bar: {
    width: "90%",
    margin: 12,
    height: 40,
    marginTop: 20,
  },
  card1:{
    height:50,
    width:350,
    marginTop:5,
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