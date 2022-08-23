import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { groups, users } from "../../config/axios";
import { useSelector } from "react-redux";
import { Card } from "react-native-paper";

const ShowUserCard = (props) => {
  const authToken = useSelector((state) => state.user.authToken);
  const user = useSelector((state) => state.user.user);
  const [student, setstudent] = useState({});

  useEffect(() => {
    users(`/${props.id}`, {
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
    console.log("clicked");
  };
  //
  const onRejectrequest = () => {
    console.log("clicked");
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

          {/* <View
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
          </View> */}
        </View>
      </Card>
    </View>
  );
};

function Usergroup() {
  const user = useSelector((state) => state.user.user);
  const authToken = useSelector((state) => state.user.authToken);

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    console.log(user.groupid);

    groups(`/${user.groupid}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        setdata(res.data.groupstudents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View>
            {data.length === 0 ? (
              <View>
                <Text style={{ textAlign: "center" }}>
                  You don't have any groups
                </Text>
              </View>
            ) : (
              <ScrollView>
                {data.map((user) => (
                  <ShowUserCard id={user} />
                ))}
              </ScrollView>
            )}
          </View>
        )}
      </View>
      {/* <View>
        {data.map((user) => (
          <ShowUserCard id={user} />
        ))}
      </View> */}
    </View>
  );
}

export default Usergroup;
