import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { Searchbar, List } from "react-native-paper";
export default function Request({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View>
      <ScrollView>
        <SafeAreaView>
          <StatusBar backgroundColor="#2085A8" barStyle="light-content" />

          {/* <Text style={styles.heading}>Student's Request</Text> */}

          <View style={styles.bar}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>

          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="First "
              description="Student Id 1"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>

          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="second "
              description="Student Id 2"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Third "
              description="Student Id 3"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Fourth"
              description="Student Id 4"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Fifth"
              description="Student Id 5"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Six"
              description="Student Id 6"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Seven"
              description="Student Id 7"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Eight"
              description="Student Id 8"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Nine"
              description="Student Id 9"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Studentdetail")}
              title="Ten"
              description="Student Id 10"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
           
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
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
  heading: {
    padding: -1,
    marginTop: "10%",
    height: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: -10,
    textDecorationLine: "underline",
  },
  logout: {
    fontSize: 13,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    marginLeft: 20,
    flex: 1,
  },
});