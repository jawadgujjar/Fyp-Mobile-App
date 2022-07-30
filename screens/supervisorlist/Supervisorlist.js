import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { Searchbar, List } from "react-native-paper";

export default function Superlist({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View>
      <ScrollView>
        <SafeAreaView>
          <StatusBar backgroundColor="#2085A8" barStyle="light-content" />
          <View style={styles.bar}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>

          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="First "
              description="Teacher Id 1"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="second "
              description="Teacher Id 2"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Third "
              description="Teacher Id 3"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Fourth"
              description="Teacher Id 4"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Fifth"
              description="Teacher Id 5"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Six"
              description="Teacher Id 6"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Seven"
              description="Teacher Id 7"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Eight"
              description="Teacher Id 8"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Nine"
              description="Teacher Id 9"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Ten"
              description="Teacher Id 10"
              left={(props) => <List.Icon {...props} icon="circle" />}
            />
          </View>
          <View>
            <List.Item
              onPress={() => navigation.navigate("Supervisordetail")}
              title="Eleven"
              description="Teacher Id 11"
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
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginTop: "20%",
    width: "90%",
  },
  bar: {
    width: "90%",
    margin: 12,
    },
});