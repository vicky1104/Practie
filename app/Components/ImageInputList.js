import React, { useRef } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUri = [], onRemoveUri, onAddUri }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUri.map((uri, index) => (
            <View style={styles.image} key={index}>
              <ImageInput imageUri={uri} onChangeUri={() => onRemoveUri(uri)} />
            </View>
          ))}
          <ImageInput onChangeUri={(uri) => onAddUri(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { marginRight: 10 },
});

export default ImageInputList;
