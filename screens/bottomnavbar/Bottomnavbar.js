import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Card, Badge, Button } from "react-native-paper";
import Count from "../countdown/Countdown";
import { useDispatch } from "react-redux";
import { setLoginState } from "../../redux/user";
import { useSelector } from "react-redux";

// import Pro from '../profile/Profile';

function HomeScreen({ navigation }) {
  const schedule = useSelector((state) => state.user.schedule);

  const [loading, setloading] = useState(false);

  const onPress = () => {
    navigation.navigate("Requests");
  };
  const onPress1 = () => {
    navigation.navigate("Proposal");
  };
  const onPress2 = () => {
    navigation.navigate("Srs");
  };
  const onPress3 = () => {
    navigation.navigate("Mdefence");
  };
  const onPress4 = () => {
    navigation.navigate("Fdefence");
  };
  const onPress5 = () => {
    navigation.navigate("Supervisorscreen");
  };

  const setLoadingFalse = () => {
    setloading(false);
  };

  useEffect(() => {
    setTimeout(setLoadingFalse, 1000);
  }, []);

  return (
    <View>
      <ScrollView>
        <SafeAreaView>
          {loading ? (
            <View>
              <Text>Loading...</Text>
            </View>
          ) : (
            <View>
              <Card style={styles.supervisor}>
                <Text style={styles.supervisortxt} onPress={onPress}>
                  {" "}
                  Select supervisor
                </Text>
                <Text style={styles.time}> Time Remaining</Text>
                {!loading && (
                  <Count
                    startingData={schedule?.supervisor?.startingdate}
                    endingDate={schedule?.supervisor?.endingdate}
                  />
                )}

                <View style={styles.logo}>
                  <Image
                    style={styles.lgu}
                    source={require("../../assets/Rarrow.png")}
                  />
                </View>
              </Card>
              <Card style={styles.supervisor}>
                <Text style={styles.supervisortxt} onPress={onPress1}>
                  Project Proposal
                </Text>
                <Text style={styles.time}> Time Remaining</Text>
                {!loading && (
                  <Count
                    startingData={schedule?.proposal?.startingdate}
                    endingDate={schedule?.proposal?.endingdate}
                  />
                )}
              </Card>
              <Card style={styles.supervisor}>
                <Text style={styles.supervisortxt} onPress={onPress2}>
                  SRS
                </Text>
                <Text style={styles.time}> Time Remaining</Text>
                {!loading && (
                  <Count
                    startingData={schedule?.srs?.startingdate}
                    endingDate={schedule?.srs?.endingdate}
                  />
                )}
              </Card>
              <Card style={styles.supervisor}>
                <Text style={styles.supervisortxt} onPress={onPress3}>
                  Mid Defence
                </Text>
                <Text style={styles.time}> Time Remaining</Text>
                {!loading && (
                  <Count
                    startingData={schedule?.middefence?.startingdate}
                    endingDate={schedule?.middefence?.endingdate}
                  />
                )}
              </Card>
              <Card style={styles.supervisor}>
                <Text style={styles.supervisortxt} onPress={onPress4}>
                  Final Defence
                </Text>
                <Text style={styles.time}> Time Remaining</Text>
                {!loading && (
                  <Count
                    startingData={schedule?.finaldefence?.startingdate}
                    endingDate={schedule?.finaldefence?.endingdate}
                  />
                )}
              </Card>
              <Card style={styles.proposal}>
                <Text style={styles.proposaltxt} onPress={onPress5}>
                  Supervisor Check
                </Text>
              </Card>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
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

function Profile({ navigation }) {
  const dispatch = useDispatch();

  const onPress = () => {
    navigation.navigate("Request");
  };

  const onPress1 = () => {
    navigation.navigate("Usergroup");
  };
  return (
    <View>
      <View>
        <Card style={styles.card1}>
          <Text style={styles.request} onPress={onPress}>
            {" "}
            Requests
          </Text>
          <Badge style={styles.badge}>3</Badge>
        </Card>

        <Card style={styles.card1}>
          <Text style={styles.request} onPress={onPress1}>
            {" "}
            Group
          </Text>
        </Card>
        <Button
          style={styles.logoutbtn}
          onPress={() => {
            dispatch(setLoginState(false));
          }}
        >
          <Text style={styles.logout}>Log-Out</Text>
        </Button>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Bottom({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  card1: {
    height: 50,
    width: 350,
    marginTop: 30,
    marginLeft: 5,
    alignContent: "center",
  },
  request: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  badge: {
    marginTop: -21,
    marginRight: 10,
  },
  supervisor: {
    height: 170,
    width: 330,
    marginTop: 30,
    borderRadius: 7,
    marginLeft: 15,
  },
  supervisortxt: {
    marginTop: 25,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  time: {
    marginLeft: 30,
    marginTop: 30,
  },
  logo: {
    marginLeft: 260,
    marginTop: -95,
  },
  lgu: {
    height: 40,
    width: 40,
  },
  proposal: {
    marginTop: 10,
    height: 70,
    width: 330,
    marginLeft: 15,
    borderRadius: 7,
  },
  proposaltxt: {
    fontWeight: "bold",
    marginTop: 23,
    textAlign: "center",
  },
  logout: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: "red",
  },
  logoutbtn: {
    marginTop: 20,
    borderRadius: 1,
  },
});
