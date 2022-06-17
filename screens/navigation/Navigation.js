import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom from "../bottomnavbar/Bottomnavbar";
import Login1 from "../login/Login";
import Tab from "../requests/Requests";
// import Group from "../group/Group";
import { useSelector } from "react-redux";
import Groups from "../Usergroup/Usergroup";
import Group1 from "../group/Group";

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

        <Stack.Screen name="Request" component={Tab} />
        <Stack.Screen name="Usergroup" component={Groups} />

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
