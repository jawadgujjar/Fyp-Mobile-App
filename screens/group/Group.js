import React, { useEffect, useState } from "react";
import { group } from "../../config/axios";
import {
    View,
    Text,
    StyleSheet,
     
  } from "react-native";

  function Group() {
    const [student, setstudent] = useState({});

  const authToken = useSelector((state) => state.user.authToken);
  const user = useSelector((state) => state.user.user);

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    group({
      method: "get",
      params: {
        groupid: "",
        groupstudents: student_id,user_id,
        groupsupervisor:"",
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
       console.log("first")
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
                You don't have any requests
              </Text>
            </View>
          ) : (
            <ScrollView>
              {data.map((user, index) => (
                <ShowUserCard key={index} sentby={user?.sentby} />
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
}

  function Group1() {
    
    return (
        <View>
           <Text style={{ textAlign: "center" }}>Your group is created!</Text>
           
        </View>


        );
    }
    export default Group1;
    const styles = StyleSheet.create({


    });