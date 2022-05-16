import { ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Dropdown from "../../../components/dropdown";
import { Styles } from "../../../styles/styles";

export default AddRawMaterial = () => {
  const services = ["Processing", "Formulating", "Sterilization", "Packaging", "Labelling", "Handling", "Quality control"];
  const categories = ["JSW", "ESSAR", "TATA Steel", "SAIL"];
  const onServiceSelected = (selectedItem, index) => {};
  const onCategorySelected = (selectedItem, index) => {};
  return (
    <ScrollView style={[Styles.flex1, Styles.padding16, Styles.backgroundColor]} keyboardShouldPersistTaps="handled">
      <View style={[Styles.marginBottom16]}>
        <Dropdown label="Service Type" data={services} onSelected={onServiceSelected} />
      </View>
      <View style={[Styles.marginBottom16]}>
        <Dropdown label="Category (Raw Material Brand)" data={categories} onSelected={onCategorySelected} />
      </View>
      <TextInput label="Brand code" onChangeText={(text) => {}} style={{ backgroundColor: "transparent" }} />
      <Button style={{ marginTop: 32 }} mode="contained" onPress={() => console.log("Pressed")}>
        Add
      </Button>
    </ScrollView>
  );
};
