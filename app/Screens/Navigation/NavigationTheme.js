import { DefaultTheme } from "@react-navigation/native";
import color from "../../config/color";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
  },
};
export default MyTheme;
