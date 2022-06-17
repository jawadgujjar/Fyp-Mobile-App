import React,{useEffect,useState} from 'react'
import {
  View,
  Text,
 
} from "react-native";
import { groups } from '../../config/axios';
import { useSelector } from "react-redux";



function Usergroup() {
  const user = useSelector((state) => state.user.user);

  const [data, setdata] = useState({})
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)

    groups(`/${user.groupid}`,{
      method: "get",
    })
      .then((res) => {
        setdata(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      })
    
  }, [])
  
  return (
    <View>

      {loading?      <Text>lodaing...</Text>
:      <Text>{JSON.stringify(data)}</Text>
}

    </View>
    
  )
}

export default Usergroup