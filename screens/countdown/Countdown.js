import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const Count = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    var expirydate = '2023-12-23 04:00:45'; 
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
   
    setTotalDuration(d);
     
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.title}>
          React Native CountDown Timer | react-native-countdown-component
        </Text> */}
        <CountDown
          until={totalDuration}
       
          timetoShow={('H', 'M', 'S')}
           
          onFinish={() => alert('finished')}
        
          onPress={() => alert('Please select the supervisor,time is too short.')}
          
          size={14}
        />
      </View>
    </SafeAreaView>
  );
};

export default Count;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop:4,
    marginLeft:-60,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
