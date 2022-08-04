import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Avatar, Button } from "react-native-paper";

export default function Studentinfo({ navigation }) {
  return (
    <View style={styles.all}>
      <SafeAreaView>
        <View style={styles.avatar}>
          <Avatar.Image
            size={120}
            source={require("../../assets/Lgu1.jpg")}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.name}>ID NO: #127</Text>
          <Text style={styles.name}>NAME: xxxxxxx</Text>
          <Text style={styles.session}>SESSION: xxxxx</Text>
          <View>
            <Text style={styles.Attachments}>Attachments:-</Text>
            <Text style={styles.num}>1:-</Text>
            <Text style={styles.num}>2:-</Text>
            <Text style={styles.num}>3:-</Text>
          </View>
        </View>
        <View style={styles.req}>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => console.log("pressed")}
          >
            <Text>Accept</Text>
          </Button>
        </View>
        <View style={styles.req1}>
          <Button
            style={styles.reject}
            mode="contained"
            onPress={() => console.log("pressed")}
          >
            <Text>Reject</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar: {
    paddingTop: 80,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 20,

    marginTop: 10,
  },
  session: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 20,

    marginTop: 10,
  },
  percentage: {
    fontSize: 15,
  },
  help: {
    fontWeight: "bold",
    fontSize: 25,
  },
  setting: {
    fontWeight: "bold",
    fontSize: 25,
  },
  logout: {
    fontWeight: "bold",
    fontSize: 25,
  },
  form: {
    paddingLeft: 10,
    paddingTop: 30,
  },
  btn: {
    margin: 20,
    marginTop: 10,
    width: 300,
  },
  btn1: {
    margin: 20,
    marginTop: 10,
  },
  btn2: {
    margin: 20,
    marginTop: 10,
  },
  btn3: {
    margin: 20,
    marginTop: 10,
  },
  req: {
    alignItems: "center",
    marginBottom: -10,
  },
  Attachments: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 20,
    marginTop: 10,
  },
  req1: {
    alignItems: "center",
  },
  reject: {
    width: 300,
  },
  all: {
    marginTop: -50,
  },
  num: {
    fontWeight: "bold",
    marginLeft: 20,
  },
});