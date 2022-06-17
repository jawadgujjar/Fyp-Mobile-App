import React, { useEffect, useState } from "react";
import { group } from "../../config/axios";
import {
    View,
    Text,
    StyleSheet,
     
  } from "react-native";
  import { useSelector } from "react-redux";

   
    
  const ShowUserCard = (props) => {
    const authToken = useSelector((state) => state.user.authToken);
    const [student, setstudent] = useState({});
    const user = useSelector((state) => state.user.user);
    const [loading, setloading] = useState(false);
    const [groupData, setGroupData] = useState({});

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
       if(res.data){
         setGroupData(res.data)
       }else{
         console.log('No Data')
       }
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);


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

  export const Group1 = () => {
    
    return (
      <View style={styles.main}>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View>
          { (groupData && groupData?.length === 0) ? (
            <View>
              <Text style={{ textAlign: "center" }}>
                You don't have any requests
              </Text>
            </View>
          ) : (
            <ScrollView>
              {groupData?.map((item, index) => (
                <ShowUserCard key={index} sentby={item?.sentby} />
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>


        );
    }
    const styles = StyleSheet.create({


    });