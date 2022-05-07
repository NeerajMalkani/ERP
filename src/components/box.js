import { View } from "react-native";

export const Box = (props) => {
  return <View style={{ ...props.style }}>{props.children}</View>;
};

export const BoxPadding = (props) => {
  return <View style={{ ...props.style, padding: 16 }}>{props.children}</View>;
};
