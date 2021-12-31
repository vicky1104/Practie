import React from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Modal,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import DefaultStyle from "../config/DefaultStyles";
import PickerItem from "./PickerItem";
import AppText from "../AppText/AppText";
import AppButton from "./AppButton";

function AppPicker({
  arrow,

  placeholder,
  items,
  showName,
  categoryName,
  width = "100%",
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => setOpen(true)}>
        <View style={styles.container}>
          <View style={styles.input}>
            <AppText width={width}>
              {categoryName ? (
                categoryName.label
              ) : (
                <Text style={styles.labeltxt}>{placeholder}</Text>
              )}
            </AppText>
            <Text style={styles.arrow}> {arrow}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="slide" visible={open}>
        <FlatList
          data={items}
          keyExtractor={(items) => items.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setOpen(false);
                showName(item);
              }}
            />
          )}
        />

        <AppButton
          style={styles.btn}
          onPress={() => setOpen(false)}
          title="close"
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: { marginBottom: 20 },
  container: {
    height: 50,
    borderRadius: 15,
    backgroundColor: DefaultStyle.color.creame,
  },
  input: {
    paddingLeft: 10,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  labeltxt: {
    color: "grey",
  },
  arrow: {
    paddingRight: 10,
  },
});

export default AppPicker;
