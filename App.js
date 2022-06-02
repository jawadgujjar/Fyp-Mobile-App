

import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './screens/navigation/Navigation';
import { Provider } from "react-redux";
import store from "./redux/store";



 

export default function App() {


  return (
    <Provider store={store}>

    <NavigationContainer>
      <StackNavigation/>    
    </NavigationContainer>
    </Provider>

  );
}