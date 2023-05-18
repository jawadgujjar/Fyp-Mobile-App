<<<<<<< HEAD
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import  Supervisor2 from './Supervisorlist2';
import SentReq2 from './Sentrequest';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}  >
       <Supervisor2/>
  </View>
 
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} >
       <SentReq2/>
=======
import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Supervisor2 from "./Supervisorlist2";
import SentReq2 from "./Sentrequest";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <Supervisor2 />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#fff" }}>
    <SentReq2 />
>>>>>>> 0d4addec2bafbd184d1cca1127a07db4cb0b5985
  </View>
);

// const ThirdRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#fff' }} >
//     <Student/>
//   </View>
// );

<<<<<<< HEAD

=======
>>>>>>> 0d4addec2bafbd184d1cca1127a07db4cb0b5985
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  // third: ThirdRoute,
});

export default function Tab2() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
<<<<<<< HEAD
    { key: 'first', title: 'Supervisorlist2' },
    { key: 'second', title: 'Sent Requests' },
=======
    { key: "first", title: "Supervisorlist2" },
    { key: "second", title: "Sent Requests" },
>>>>>>> 0d4addec2bafbd184d1cca1127a07db4cb0b5985
    // { key: 'third', title: 'Students' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 0d4addec2bafbd184d1cca1127a07db4cb0b5985
