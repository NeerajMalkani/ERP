import { useState } from "react";
import { Card, TextInput } from "react-native-paper";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Box } from "../components/box";
import RNPickerSelect from "react-native-picker-select";
import { theme } from "../theme/apptheme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Dropdown from "../components/dropdown";

export default AddRawMaterial = () => {
  const [text, setText] = useState("");
  const data = [
    { text: "Item 1", value: "1" },
    { text: "Item 2", value: "2" },
    { text: "Item 3", value: "3" },
    { text: "Item 4", value: "4" },
    { text: "Item 5", value: "5" },
    { text: "Item 6", value: "6" },
    { text: "Item 7", value: "7" },
    { text: "Item 8", value: "8" },
  ];

  const onChangeText = (textValue) => {};

  const onSelected = (selectedValue) => {
    console.log(selectedValue);
  };

  return (
    <View style={{ flex: 1 }}>
      <Dropdown data={data} label="Select" onChange={onChangeText} onSelected={onSelected} />
    </View>
  );
};
