import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default Dropdown = ({ data, onSelected, onChange, label }) => {
  return (
    <View>
      <TextInput label={label} onChangeText={(text) => onChange(text)} />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={onSelected(item?.text)}>
            <Text>{item?.text || ""}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.text}
      />
    </View>
  );
};
