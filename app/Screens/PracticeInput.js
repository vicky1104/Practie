import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import AppPicker from "../Components/AppPicker";
import { AntDesign } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import ErrorMessage from "../Components/ErrorMessage";

function PracticeInput({ width = "100%", items, name, placeholder, icon }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <SafeAreaView style={styles.container} width={width}>
      <AppPicker
        icon={icon}
        categoryName={values[name]}
        showName={(item) => setFieldValue(name, item)}
        items={items}
        placeholder={placeholder}
        arrow={<AntDesign name="down" size={24} color="grey" />}
      />
      {touched.hasOwnProperty(name) &&
        errors.hasOwnProperty(name) &&
        touched[name] &&
        errors[name] && (
          <ErrorMessage error={errors[name]} visible={touched[name]} />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default PracticeInput;
