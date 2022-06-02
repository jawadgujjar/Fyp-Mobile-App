import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Card } from "react-native-paper";
import { requests, users } from "../../config/axios";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowUserCard = (props) => {
  const authToken = useSelector((state) => state.user.authToken);
  const [student, setstudent] = useState({});

  useEffect(() => {
    users(`/${props.sendto}`, {
      method: "get",

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
  }, []);

  // 
  const onCancelrequest = () => {

    requests(`/${props?.requestid}`, {
      method: "delete",

      headers: {
        Authorization: `Bearer ${authToken}`,
      },

    })
    
      .then(() => {
        props?.callrefresh(!props?.refresh)

      })
      .catch((err) => {
        console.log(err);
      });

 
  };

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

          <View >
            
            <TouchableOpacity onPress={ onCancelrequest} style={{backgroundColor:"#DF1B32",padding:5,borderRadius:5}}>
              <Text style={{color:"white"}}>Cancel Request </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

function SentReq() {
  const authToken = useSelector((state) => state.user.authToken);
  const user = useSelector((state) => state.user.user);

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [refresh, setrefresh] = useState(false)


  useEffect(() => {
    setloading(true);
    requests({
      method: "get",
      params: {
        sentby: user._id,
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        setdata(res.data.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, [refresh]);

  return (
    <View style={styles.main}>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View>
          {data.length === 0 ? (
            <View>
              <Text style={{ textAlign: "center" }}>
                You don't have any requests
              </Text>
            </View>
          ) : (
            <ScrollView>
              {data.map((user, index) => (
                <ShowUserCard key={index} refresh={refresh} callrefresh={setrefresh} sendto={user?.sendto} requestid={user?._id} />
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
}
export default SentReq;
const styles = StyleSheet.create({});
