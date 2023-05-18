import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./screens/navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import Splashscreen1 from "./screens/splashscreen/splashscreen";

export default function App() {
  return (
    // <Splashscreen1 />
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
