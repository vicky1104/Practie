import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { Login } from "../Api/auth";
import AppButton from "../Components/AppButton";
import AppTextInput from "../Components/AppTextInput";
import ErrorMessage from "../Components/ErrorMessage";

function Form(props) {
  const [loginFailed, setLoginFailed] = React.useState(false);
  const validate = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(8).label("Password"),
  });
  const submitForm = async ({ email, password }) => {
    const result = await Login(email, password);
    if (!result.ok) return setLoginFailed(true);
    loginFailed(false);
    console.log(result.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={submitForm}
        validationSchema={validate}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <ErrorMessage
              error="Invalaid Name or Password"
              visible={loginFailed}
            />
            <AppTextInput
              onChangeText={handleChange("email")}
              placeholder="Email"
              onBlur={() => setFieldTouched("email")}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              placeholder="password"
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton
              style={styles.btn}
              title="Submit"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: 230,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default Form;
