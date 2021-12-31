import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import color from "../config/color";
import { log } from "../Utility/Logger";

function ImageInput({ imageUri, onChangeUri }) {
  const handlePress = () => {
    if (!imageUri) {
      getImage();
    } else {
      Alert.alert("Delete", "Are you sure to delete this item ?", [
        { text: "Yes", onPress: () => onChangeUri(null) },
        { text: "No" },
      ]);
      if (Platform.OS === "web") {
        confirm("Delete", [
          { text: "Yes", onClick: () => onChangeUri(null) },
          { text: "No" },
        ]);
      }
    }
  };
  const getImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeUri(result.uri);
    } catch (error) {
      log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons name="camera" color="grey" size={40} />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ height: 100, width: 100 }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    flexDirection: "row",
    backgroundColor: color.creame,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default ImageInput;
