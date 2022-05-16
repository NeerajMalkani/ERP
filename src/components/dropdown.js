import { useState } from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { Text } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "../theme/apptheme";

export default Dropdown = ({ data, label, onSelected }) => {
  let mainSelectedItem = "";
  const [isFocused, setFocused] = useState(false);
  return (
    <SelectDropdown
      data={data}
      dropdownOverlayColor="transparent"
      defaultButtonText={label}
      buttonStyle={{ width: "100%", height: 56, borderBottomWidth: 1, backgroundColor: "transparent", borderBottomColor: isFocused ? theme.colors.primary : theme.colors.textSecondary }}
      renderCustomizedButtonChild={(selectedItem, index) => {
        return (
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 8 }}>
            <Text style={selectedItem ? { color: isFocused ? theme.colors.primary : theme.colors.text, fontSize: 16 } : { color: isFocused ? theme.colors.primary : theme.colors.textSecondary, fontSize: 16 }}>
              {selectedItem ? selectedItem : label}
            </Text>
          </View>
        );
      }}
      dropdownStyle={{ marginTop: -38 }}
      rowStyle={{ borderBottomWidth: 1, borderBottomColor: theme.colors.border, backgroundColor: theme.colors.textLight }}
      renderDropdownIcon={(isOpened) => {
        return <FontAwesome name={isOpened ? "angle-up" : "angle-down"} color={isFocused ? theme.colors.primary : theme.colors.textSecondary} size={18} />;
      }}
      onSelect={(selectedItem, index) => {
        mainSelectedItem = selectedItem;
        onSelected(selectedItem, index);
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      renderCustomizedRowChild={(selectedItem) => {
        return (
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 18 }}>
            <Text style={{ textAlign: "left", color: mainSelectedItem === selectedItem ? theme.colors.primary : theme.colors.text, fontSize: 16 }}>{selectedItem}</Text>
          </View>
        );
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};
