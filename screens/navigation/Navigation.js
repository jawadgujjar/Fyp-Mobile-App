import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "../bottomnavbar/Bottomnavbar";
import Login1 from "../login/Login";
import Tab from "../requests/Requests";
// import Group from "../group/Group";
import { useSelector } from "react-redux";
import Groups from "../Usergroup/Usergroup";
import Count from "../countdown/Countdown";
import Teacherinfo from "../supervisordetail/Supervisordetail";
import Superlist from "../supervisorlist/Supervisorlist";
import Prop from "../proposal/Proposal";
import Sr from "../srs/Srs";
import Mdef from "../mdefence/Mdefence";
import Fdef from "../fdefence/Fdefence";
 

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const loginState = useSelector((state) => state.user.isLoggedIn);

  if (loginState) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeftContainerStyle: { padding: 20 },
          headerRightContainerStyle: { padding: 20 },
          headerStyle: {
            backgroundColor: "rgb(8,140,0)",
          },
        }}
      >
        <Stack.Screen
          name="Bottomnavbar"
          options={{ headerShown: false }}
          component={Bottom}
        />
        <Stack.Screen name="Countdown" component={Count } />

        <Stack.Screen name="Request" component={Tab} />
        <Stack.Screen name="Usergroup" component={Groups} />
        <Stack.Screen name="Supervisordetail" component={Teacherinfo} />
        <Stack.Screen name="Supervisorlist" component={Superlist} />
        <Stack.Screen name="Proposal" component={Prop} />
        <Stack.Screen name="Srs" component={Sr} />
        <Stack.Screen name="Mdefence" component={Mdef} />
        <Stack.Screen name="Fdefence" component={Fdef} />
         

        {/* <Stack.Screen name="Group" component={Group} /> */}
       
      </Stack.Navigator>
      
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeftContainerStyle: { padding: 20 },
          headerRightContainerStyle: { padding: 20 },
          headerStyle: {
            backgroundColor: "rgb(8,140,0)",
          },
        }}
      >
        <Stack.Screen name="Login" component={Login1} />
      </Stack.Navigator>
    );
  }
};

export default StackNavigation;
