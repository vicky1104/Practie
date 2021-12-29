import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";

import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

function AppFormFeild({ name, ...otherProps }) {
  const {
    setFieldTouched,
    handleChange,
    setFieldValue,
    values,
    errors,
    dirty,
    touched,
  } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppTextInput
        key={name}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />

      {touched.hasOwnProperty(name) &&
        errors.hasOwnProperty(name) &&
        touched[name] &&
        errors[name] && (
          <ErrorMessage error={errors[name]} visible={touched[name]} />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
});

export default AppFormFeild;
