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
  </View>
);

// const ThirdRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#fff' }} >
//     <Student/>
//   </View>
// );


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  // third: ThirdRoute,
});

export default function Tab2() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Supervisorlist2' },
    { key: 'second', title: 'Sent Requests' },
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
}