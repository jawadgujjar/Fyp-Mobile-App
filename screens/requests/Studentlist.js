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
  const user = useSelector((state) => state.user.user);
  const [student, setstudent] = useState({});
  const [data, setdata] = useState([]);
  const reqstu = useSelector((state) => state.user.user);


  // 

  const onsendreq = () => {

    requests(`/${props?.reqstu}`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
     data: {
        fullName:reqstu.fullName,
        
}
    })
      .then((res) => {
        console.log(props?.reqstu)
        // console.log( res.data)
      })
      .catch((err) => {
        console.log(err);
      });


 
  };
  // 
  // 

  return (
    <View>
      <Card
        style={{ backgroundColor: "transparent", padding: 20, marginBottom: 5 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text>Name: {props.data?.fullName}</Text>
            <Text>Roll No: {props.data?.rollNumber}</Text>
            <Text>
              {props.data?.degree} {props.data?.department}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={onsendreq}
              style={{
                backgroundColor: "#6DE039",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Send Request</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Card>
    </View>
  );
            
            }
function Student() {
  const authToken = useSelector((state) => state.user.authToken);
  const user = useSelector((state) => state.user.user);


  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [tempoArray, settempoArray] = useState([]);

  function filterUserData(comingData) {
    let temp = [];
    let d = comingData;
    d = d.filter((d) => d._id !== user._id);

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
        if (res.data.data.length !== 0) {
          for (let i = 0; i < res.data.data.length; i++) {
            for (let j = 0; j < d.length; j++) {
              if (res.data.data[i]?.sendto !== d[j]._id) {
                temp.push(d[j]);
              }
            }
          }
          settempoArray(temp);

        }else {
          settempoArray(d);

        }

      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (loading) {
      let temp = [];

      requests({
        method: "get",
        params: {
          sendto: user._id,
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((res) => {

          if (res.data.data.length !== 0) {
            for (let i = 0; i < res.data.data.length; i++) {
              for (let j = 0; j < tempoArray.length; j++) {
                if (res.data.data[i]?.sentby !== tempoArray[j]._id) {
                  temp.push(tempoArray[j]);
                }
              }
              setdata(temp);

            }
          } else {
            setdata(tempoArray);


          }
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setdata([]);
        });
    }
  }, [tempoArray]);

  useEffect(() => {
    setloading(true);
    users({
      method: "get",
      params: {
        role: 2,
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        filterUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);

  return (
    <View style={styles.main}>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View>
          {data.length === 0 ? (
            <View>
              <Text style={{ textAlign: "center" }}>
                No students available!
              </Text>
            </View>
          ) : (
            <ScrollView>
              {data.map((user, index) => (
                <ShowUserCard key={index} data={user} sendrequest={user?._id} reqstu={user?._id}/>
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
}
export default Student;
const styles = StyleSheet.create({});
