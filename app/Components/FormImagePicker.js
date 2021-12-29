import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";
import ImageInputList from "./ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { setFieldValue, errors, values, touched } = useFormikContext();

  const handleUri = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const removeUri = (id) => {
    setFieldValue(
      name,
      values[name].filter((uri) => id !== uri)
    );
  };
  return (
    <View style={styles.container}>
      <ImageInputList
        imageUri={values[name]}
        onAddUri={handleUri}
        onRemoveUri={removeUri}
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

export default FormImagePicker;
