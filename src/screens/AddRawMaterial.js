import { Card, TextInput } from "react-native-paper";
import { View } from "react-native";
import { Box } from "../components/box";
import RNPickerSelect from "react-native-picker-select";
import { theme } from "../theme/apptheme";

export default AddRawMaterial = () => {
  return (
    <Box style={{ flex: 1 }}>
      <Card>
        <Card.Content>
          <View style={{ padding: 16 }}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              useNativeAndroidPickerStyle={true}
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" },
              ]}
            />
            {/* <TextInput label="Email" onChangeText={{}} /> */}
          </View>
        </Card.Content>
      </Card>
    </Box>
  );
};
