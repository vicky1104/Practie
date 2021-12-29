import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.container}>
      <AppButton onPress={handleSubmit} title={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
