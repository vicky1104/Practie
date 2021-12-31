import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

import PracticeInput from "./PracticeInput";
import AppFormFeild from "../Components/Form/AppFormFeild";
import SubmitButton from "../Components/Form/SubmitButton";
import FormImagePicker from "../Components/FormImagePicker";
import { addListings } from "../Api/getListings";
import PostModal from "../Components/PostModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Display(props) {
  const validate = Yup.object().shape({
    title: Yup.string().required().min(1).label("title"),
    price: Yup.number().required().min(1).max(10000).label("price"),
    description: Yup.string(),
    categories: Yup.object().required("Plese select categories").nullable(),
    images: Yup.array().min(1, "please select at least one Image"),
  });

  // `````````````````  REQUEST CAMERA PERMISSION

  const reqCameraPermision = async () => {
    let { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("need permission to access camera");
  };

  React.useEffect(reqCameraPermision, []);

  // `````````````````  REQUEST LOCATION PERMISSION

  const [location, setLocation] = React.useState();
  const reqLocationPermision = async () => {
    let { granted } = await Location.requestForegroundPermissionsAsync();
    console.log(granted);
    if (!granted) {
      alert("need location permission ");
    } else {
      const d = await Location.getCurrentPositionAsync();

      const {
        coords: { latitude, longitude },
      } = d;
      setLocation({ latitude, longitude });
    }
  };
  React.useEffect(reqLocationPermision, []);

  const [progress, setProgress] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  // `````````````````````````````` POSTING DATA

  const handleSubmit = async (listings, resetForm) => {
    setProgress(0);
    setVisible(true);

    const result = await addListings(
      listings,
      location,
      { resetForm },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setVisible(false), alert("Could't upload data");
    }
    resetForm();
  };

  const categories = [
    {
      label: "Car",
      value: 1,
      icon: "apps",
    },
    {
      label: "Bike",
      value: 2,
      icon: "mail",
    },
    {
      label: "Bus",
      value: 3,
      icon: "icon",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <PostModal
        progress={progress}
        visible={visible}
        onDone={() => setVisible(false)}
      />

      <Formik
        initialValues={{
          title: "",
          price: "",
          categories: "",
          description: "",
          images: [],
        }}
        onSubmit={(listings, { resetForm }) => {
          handleSubmit(listings, resetForm);
        }}
        validationSchema={validate}
      >
        {() => {
          return (
            <ScrollView>
              {/* `````````````````` IMAGES `````````````````` */}

              <FormImagePicker name="images" />

              {/* `````````````````` TITLE `````````````````` */}
              <AppFormFeild
                name="title"
                placeholder="Title"
                numberOfLines={1}
              />
              {/* `````````````````` PRICE `````````````````` */}

              <AppFormFeild
                name="price"
                placeholder="Price"
                keyboardType="number-pad"
                width={120}
              />
              {/* `````````````````` CATEGORIES `````````````````` */}

              <PracticeInput
                icon={categories.icon}
                width={180}
                items={categories}
                name="categories"
                placeholder="categories"
              />

              {/* `````````````````` DESCRIPTION  `````````````````` */}
              <AppFormFeild
                name="description"
                placeholder="Description"
                numberOfLines={3}
                multiLine
              />

              <SubmitButton title="Post" />
            </ScrollView>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Display;
