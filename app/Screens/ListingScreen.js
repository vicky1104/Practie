import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AppCard from "../Components/AppCard";
import color from "../config/color";
import LottieView from "lottie-react-native";
import loader from "../Components/Amimations/loading.json";
import { getListing } from "../Api/getListings";
import AppText from "../AppText/AppText";

function ListingScreen({ navigation }) {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const loadListings = async () => {
    setError(true);
    const response = await getListing();
    setError(false);
    setData(response.data);

    if (!response.ok) {
      setError(true);
    } else {
      setData(response.data);
      setError(false);
    }
  };

  React.useEffect(() => {
    loadListings();
  }, []);

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* `````````````````````ERROR LOADER */}

      {error && (
        <View style={styles.err}>
          <LottieView source={loader} autoPlay loop />
        </View>
      )}

      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <AppCard
            image={item.images[0].url}
            subTitle={item.price}
            title={item.title}
            onPress={() => navigation.navigate("ListDetails", item)}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.creame,

    // minHeight: Platform.OS === "android" ? "100%" : "500%",
  },
  err: {
    width: "95%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  errText: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default ListingScreen;
