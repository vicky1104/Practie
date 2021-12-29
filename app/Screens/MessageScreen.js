import React from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import ListItem from "../Components/ListItem";
import ListItemDeleteAction from "../Components/ListItemDeleteAction";
import color from "../config/color";

const Message = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/icon.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/favicon.png"),
  },
];

function MessageScreen(props) {
  const [data, setData] = React.useState(Message);

  const handleDelete = (item) => {
    return setData(data.filter((ele) => ele.id !== item.id));
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(Message) => Message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log()}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: color.lightGrey,
            }}
          />
        )}
        refreshing={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessageScreen;
