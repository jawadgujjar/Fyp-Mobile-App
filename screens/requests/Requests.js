import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Req from './Request';
import Requestsent from './Sentrequest';
import Student from './Studentlist';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}  >
      <Req/>
  </View>
 
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} >
    <Requestsent/>
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} >
    <Student/>
  </View>
);


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function Tab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Requests' },
    { key: 'second', title: 'Sent Requests' },
    { key: 'third', title: 'Students' },
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