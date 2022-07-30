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

export default function Prop() {

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
              size={130}
              source={require("../../assets/Lgu1.jpg")}
            />
          </View>

          <View>
            <Text style={styles.name}>FYP ID: 128</Text>
            
          </View>
          <View>
            <Text style={styles.session}>Group Members: Usama Ahmad & Jawad Ahmad</Text>
          </View>

          <View>
            <Text style={styles.session}>Submission Time: Aug 18,2022</Text>
          </View>

          <View>
            <Text style={styles.session}>Obtained Marks: _________ .</Text>
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
                marginTop: "15%",
              }}
            >
              <Text>+ Add Proposal File </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <Button
                style={styles.btn3}
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                <Text style={styles.logout}> Send  </Text>
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
    fontSize: 20,
    marginLeft:20,
    marginTop: 40,
    textAlign:'center',
  },
  session: {
    fontWeight: "bold",
    fontSize: 20,   
    marginLeft:20,
    marginTop:30,
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