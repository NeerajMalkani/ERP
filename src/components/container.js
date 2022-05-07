import { View } from "react-native";

export const Container = (props) => {
  return <View style={{ ...props.style, display: "flex"}}>{props.children}</View>;
};

export const ContainerCenter = (props) => {
  return <View style={{ ...props.style, display: "flex", alignItems: "center", justifyContent: "center" }}>{props.children}</View>;
};

export const ContainerHorizontal = (props) => {
  return <View style={{ ...props.style, display: "flex", flexDirection: "row" }}>{props.children}</View>;
};

export const ContainerVertical = (props) => {
  return <View style={{ ...props.style, display: "flex", flexDirection: "column" }}>{props.children}</View>;
};