import { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Menu, Text, TextInput } from "react-native-paper";

export default Dropdown = ({ data, onSelected, onChange, label }) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Menu visible={visible} onDismiss={closeMenu} statusBarHeight={100} style={{ flex: 1, flexGrow: 1 }} anchor={<TextInput label={label} onPressIn={openMenu} onBlur={closeMenu} />}>
        <Menu.Item
          // style={{ flex: 1, flexGrow: 1, width: 400 }}
          // titleStyle={{ alignSelf: "stretch" }}
          onPress={() => {
            closeMenu();
          }}
          title="Item 1"
        />
        <Menu.Item style={{ flexGrow: 1, flex: 1, alignSelf: "stretch" }} onPress={() => {}} title="Item 2" />
      </Menu>
    </View>
  );
};
