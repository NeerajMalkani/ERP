import { View, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default AddRawMaterial = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland"];
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SelectDropdown
        data={countries}
        // defaultValueByIndex={1}
        // defaultValue={'Egypt'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        dropdownOverlayColor="transparent"
        defaultButtonText={"Select country"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return <FontAwesome name={isOpened ? "chevron-up" : "chevron-down"} color={"#444"} size={18} />;
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#FFFFFF", marginTop: -36 },
  dropdown1RowStyle: { backgroundColor: "#EFEFEF", borderBottomColor: "#C5C5C5" },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
