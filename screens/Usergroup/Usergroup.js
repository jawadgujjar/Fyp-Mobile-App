import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { groups } from "../../config/axios";
import { useSelector } from "react-redux";

function Usergroup() {
  const user = useSelector((state) => state.user.user);
  const authToken = useSelector((state) => state.user.authToken);
  const [groupstudents, setgroupstudents] = useState({});

  const [data, setdata] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    console.log(user.groupid);

    groups(`/${user.groupid}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <View>
        <Text> Students: {data.groupstudents}</Text>
      </View>
    </View>
  );
}

export default Usergroup;