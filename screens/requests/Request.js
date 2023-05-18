import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { requests, users, groups } from "../../config/axios";
import { useSelector } from "react-redux";
<<<<<<< HEAD
// import { TouchableOpacity } from "react-native-gesture-handler";
=======
>>>>>>> 0d4addec2bafbd184d1cca1127a07db4cb0b5985
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user";

const ShowUserCard = (props) => {
  const dispatch = useDispatch();

  const authToken = useSelector((state) => state.user.authToken);
  const user = useSelector((state) => state.user.user);
  const [student, setstudent] = useState({});

  useEffect(() => {
    users(`/${props.sentby}`, {
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

  const onGroupcreate = () => {
    groups({
      method: "post",

      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        groupid: "",
        groupstudents: [`${student._id}`, `${user._id}`],
        groupsupervisor: "",
      },
    })
      .then((res) => {
        let editeduser = {
          groupid: res.data._id,
        };

        users(`/${user._id}`, {
          method: "patch",
          data: editeduser,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
          .then((res) => {
            dispatch(setUser(res.data));
            users(`/${student._id}`, {
              method: "patch",
              data: editeduser,
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            })
              .then((res) => {
// <<<<<<< HEAD
                 props?.callrefresh(!props?.refresh);
                onRejectrequest()
// =======
                props?.callrefresh(!props?.refresh);
                onRejectrequest();
// >>>>>>> 46a309a5c8dc46e5b05d5edce9c312318e9ef08f
              })
              .catch((err) => {
                console.log(err);
              });
// <<<<<<< HEAD
           
// =======
// >>>>>>> 46a309a5c8dc46e5b05d5edce9c312318e9ef08f
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  const onRejectrequest = () => {
    requests(`/${props?.requestid}`, {
      method: "delete",

      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then(() => {
        props?.callrefresh(!props?.refresh);
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text>Name: {student?.fullName}</Text>
            <Text>Roll No: {student?.rollNumber}</Text>
            <Text>
              {student?.degree} {student?.department}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: 70,
            }}
          >
            <TouchableOpacity
              onPress={onGroupcreate}
              style={{
                backgroundColor: "#6DE039",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onRejectrequest}
              style={{
                backgroundColor: "#DF1B32",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

function Req() {
  const authToken = useSelector((state) => state.user.authToken);
  const user = useSelector((state) => state.user.user);

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    setloading(true);
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
                <ShowUserCard
                  key={index}
                  requestid={user?._id}
                  refresh={refresh}
                  callrefresh={setrefresh}
                  sentby={user?.sentby}
                />
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
}
export default Req;
const styles = StyleSheet.create({});
