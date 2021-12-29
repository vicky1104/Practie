import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import AppButton from "../AppButton";
import AppTextInput from "../AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../ErrorMessage";
import { RegisterUser } from "../../Api/auth";
import AppText from "../../AppText/AppText";
import { setToken } from "../../Auth/Store";
import { AuthContext } from "../../Auth/auth";

function RegisterForm(props) {
  const authContext = React.useContext(AuthContext);
  const [userExist, setUserExist] = React.useState();

  const validate = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().min(1).label("Name"),
    password: Yup.string().required().min(5).label("Password"),
  });

  const handleSubmit = async ({ email, name, password }) => {
    const response = await RegisterUser(email, name, password);
    if (!response.ok) {
      setUserExist(response.data.error);
    } else {
      setUserExist(null);
      await setToken(response.data);
      authContext.setUser(response.data);
      console.log(response.data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validate}
      >
        {({
          setFieldTouched,
          setFieldValue,
          handleSubmit,
          touched,
          errors,
        }) => (
          <View style={styles.form}>
            {userExist && (
              <AppText style={{ color: "red" }}>{userExist} </AppText>
            )}
            <AppTextInput
              icon="account"
              name="name"
              onChangeText={(txt) => setFieldValue("name", txt)}
              onBlur={() => setFieldTouched("name")}
              size={20}
              placeholder="Name"
            />
            {errors.hasOwnProperty("name") &&
              touched.hasOwnProperty("name") && (
                <ErrorMessage error={errors.name} visible={touched.name} />
              )}

            <AppTextInput
              name="email"
              onChangeText={(txt) => setFieldValue("email", txt)}
              onBlur={() => setFieldTouched("email")}
              icon="email"
              keyboardType="email-address"
              size={20}
              placeholder="Email"
            />
            {errors.hasOwnProperty("email") &&
              touched.hasOwnProperty("email") && (
                <ErrorMessage error={errors.email} visible={touched.email} />
              )}

            <AppTextInput
              icon="lock"
              name="password"
              onChangeText={(txt) => setFieldValue("password", txt)}
              onBlur={() => setFieldTouched("password")}
              size={20}
              secureTextEntry={true}
              placeholder="Password"
            />
            {errors.hasOwnProperty("password") &&
              touched.hasOwnProperty("password") && (
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
              )}

            <AppButton onPress={handleSubmit} title="REGISTER" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  form: {
    padding: 10,
    width: "95%",
    height: 280,
    alignSelf: "center",
    justifyContent: "space-between",
  },
});

export default RegisterForm;
