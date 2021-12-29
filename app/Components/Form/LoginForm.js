import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  Image,
  StatusBar,
} from "react-native";

import * as Yup from "yup";
import { Formik } from "formik";

import jwtDecode from "jwt-decode";
import { Login } from "../../Api/auth";
import DummyIcon from "../../assets/logo-red.png";
import AppButton from "../AppButton";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";
import { AuthContext } from "../../Auth/auth";
import { setToken } from "../../Auth/Store";

function LoginForm(props) {
  const [loginFailed, setLoginFailed] = React.useState(false);

  const authContext = React.useContext(AuthContext);

  const validate = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).max(12).label("Password"),
  });

  const handleSubmit = async ({ email, password }) => {
    const response = await Login(email, password);
    if (!response.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(response.data);
    authContext.setUser(user);
    console.log(response.data);
    setToken(response.data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={DummyIcon} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validate}
      >
        {({
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          errors,
          touched,
        }) => {
          return (
            <View style={styles.text}>
              {loginFailed && (
                <ErrorMessage
                  error="Username or Password is incorrect"
                  visible={loginFailed}
                />
              )}
              <AppTextInput
                icon="email"
                onChangeText={(txt) => setFieldValue("email", txt)}
                keyboardType="email-address"
                size={20}
                onBlur={() => setFieldTouched("email")}
                placeholder="Email"
              />
              {errors.hasOwnProperty("email") &&
                touched.hasOwnProperty("email") && (
                  <ErrorMessage error={errors.email} visible={touched.email} />
                )}

              <AppTextInput
                icon="lock"
                size={20}
                onChangeText={(txt) => setFieldValue("password", txt)}
                secureTextEntry={true}
                onBlur={() => setFieldTouched("password")}
                placeholder="Password"
              />
              {errors.hasOwnProperty("password") &&
                touched.hasOwnProperty("password") && (
                  <ErrorMessage
                    error={errors.password}
                    visible={touched.password}
                  />
                )}

              <AppButton onPress={handleSubmit} title="LOGIN" />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    height: 150,
    width: 150,
    marginTop: 0,
    alignSelf: "center",
    marginBottom: 20,
  },
  text: {
    height: 180,
    justifyContent: "space-between",
  },
});

export default LoginForm;
