import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { login } from "../../config/axios";
import { useDispatch } from "react-redux";
import { setUser, setToken, setLoginState } from "../../redux/user";

function Login1() {
  const dispatch = useDispatch();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const onLogin = () => {
    setloading(true);
    const data = {
      email: username,
      password: password,
      strategy: "local",
    };
    login({
      method: "post",
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.accessToken));
        dispatch(setLoginState(true));
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      })
      
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.lgu} source={require("../../assets/lgu.png")} />
      </View>

      <TextInput
        value={username}
        onChangeText={(p) => setusername(p)}
        placeholder={"Username"}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(p) => setpassword(p)}
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />

      {/* <Button
      title={'Login'}
      style={styles.btn}
      onPress={onPress}
       
    /> */}
      <View>
        <TouchableOpacity style={styles.btn} onPress={onLogin}>
          <View style={{ flexDirection: "row" }}>
            {loading && <ActivityIndicator size="small" color="white" />}
            <Text style={{ color: "white" }}> Log-In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#ecf0f1',
    marginTop: -70,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
    borderRadius: 5,
  },
  logo: {
    marginBottom: 50,
  },
  lgu: {
    height: 200,
    width: 200,
  },
  btn: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
  },
});
