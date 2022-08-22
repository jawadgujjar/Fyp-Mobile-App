import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import moment from "moment";

const Count = (props) => {
  const [totalDuration, setTotalDuration] = useState(0);
  const [loading, setloading] = useState(false);

  const setLoadingFalse = (d) => {
    setTotalDuration(d);

    setloading(false);
  };

  useEffect(() => {
    setloading(true);
    var date = moment().format("YYYY-MM-DD");
    var expirydate = moment(props.endingDate);
    console.log(expirydate, date);

    var d = moment.duration(expirydate.diff(date)).asDays() * 24 * 3600;

    setTimeout(() => setLoadingFalse(d), 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {loading ? (
          <Text style={{ color: "black", fontSize: 12, marginLeft: 160 }}>
            Loading...
          </Text>
        ) : (
          <CountDown
            until={totalDuration}
            timetoShow={("H", "M", "S")}
            size={14}
          />
        )}
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
    marginTop: 4,
    marginLeft: -60,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
});
