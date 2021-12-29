import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../AppText/AppText";
import ProgressBar from "react-native-progress/Bar";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import done from "../Components/Amimations/done";

function PostModal({ progress = 0, visible = false, onDone }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <>
            <AppText>{progress * 100}%</AppText>
            <ProgressBar
              progress={progress}
              color={color.primary}
              width={200}
            />
          </>
        ) : (
          <LottieView
            style={{ height: 150, width: 150 }}
            autoPlay
            source={done}
            loop={false}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostModal;
