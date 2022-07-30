import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Avatar } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";

export default function Teacherinfo() {

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
}
  
  return (
    <View>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.avatar}>
            <Avatar.Image
              size={120}
              source={require("../../assets/Lgu1.jpg")}
            />
          </View>

          <View>
            <Text style={styles.name}>NAME: Teacher Name</Text>
          </View>
          <View>
            <Text style={styles.session}>Teacher ID: Fall-18</Text>
          </View>
          <View>
            <Text style={styles.session}>Area Of Specialist:-</Text>
          </View>
          <View>
            <Text style={styles.text}>
              {" "}
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => this._pickDocument()}
              style={{
                padding: 10,
                alignItems: "center",
                width: "80%",
                borderRadius: 10,
                backgroundColor: "#d014",
                marginTop: "2%",
              }}
            >
              <Text>+ Add Proposal Files </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <Button
                style={styles.btn3}
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                <Text style={styles.logout}> Send Request </Text>
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 30,
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
  text: {
    textAlign: "center",
    fontSize: 15,
  },
  btn3: {
    width: "80%",
    color: "#d014",
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "10%",
    borderRadius: 10,
  },
});