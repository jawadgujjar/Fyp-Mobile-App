import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from "react-native";
import { Card } from "react-native-paper";
import {  groups } from "../../config/axios";
import { useSelector } from "react-redux";
 

  
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const ShowUserCard = (props) => {
  const authToken = useSelector((state) => state.user.authToken);
  const [student, setstudent] = useState({});
  const user = useSelector((state) => state.user.user);




  useEffect(() => {
    setloading(true);

    groups( {
        method: "get",
        data : {
            groupid: "",
            groupstudents:[`${student._id}`,`${user._id}`],
            groupsupervisor:"",
        },
  
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
    })
      .then((res) => {
        setstudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshing]);

  // 
 
  // 

  return (
    <View>
      <Card
        style={{ backgroundColor: "transparent", padding: 20, marginBottom: 5 }}
      >
        <View style={{ flexDirection:"row", justifyContent: "space-between",alignItems:"center" }}>
          <View>
            <Text>Name: {student?.fullName}</Text>
            <Text>Roll No: {student?.rollNumber}</Text>
            <Text>
              {student?.degree} {student?.department}
            </Text>
          </View>          
        </View>
      </Card>
    </View>
  );
};

function Groups() {
  const authToken = useSelector((state) => state.user.authToken);
  const user = useSelector((state) => state.user.user);

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [refresh, setrefresh] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);



//   useEffect(() => {
//     setloading(true);
//     requests({
//       method: "get",
//       params: {
//         sentby: user._id,
//       },
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     })
//       .then((res) => {
//         setdata(res.data.data);
//         setloading(false);
//         setRefreshing(false);

//       })
//       .catch((err) => {
//         console.log(err);
//         setloading(false);
//       });
//   }, [refresh,refreshing]);

  return (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} >

    <View style={styles.main}>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View>
          {data.length === 0 ? (
            <View>
              <Text style={{ textAlign: "center" }}>
                You don't have any Group
              </Text>
            </View>
          ) : (
            <ScrollView  >
              {data.map((user, index,) => (
                <ShowUserCard key={index} refresh={refresh} callrefresh={setrefresh} sendto={user?.sendto} requestid={user?._id} />
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
    </RefreshControl>

  );
}
export default Groups;
const styles = StyleSheet.create({});
