import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";

export default function Profile() {
  return (
    <View style={styles.all}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.avatar}>
            <Avatar.Image
              size={120}
              source={require("../../assets/Lgu1.jpg")}
            />
          </View>

          <View>
            <Text style={styles.name}>NAME: Student Name</Text>
          </View>
          <View>
            <Text style={styles.session}>Student ID: Fall-18</Text>
          </View>
          <View>
            <Text style={styles.session}>Project Description:-</Text>
          </View>
          <View>
            <Text style={styles.text}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
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
  btn: {
    margin: 120,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    textAlign: "justify",
    textAlign: "center",
  },
  btn3: {
    width: "80%",
    alignItems: "center",
    color: "#d014",
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "10%",
    borderRadius: 10,
  },
  all: {
    marginTop: -50,
  },
});