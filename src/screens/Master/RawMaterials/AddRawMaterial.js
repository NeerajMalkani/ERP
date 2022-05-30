import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import Dropdown from "../../../components/dropdown";
import { Styles } from "../../../styles/styles";
import { theme } from "../../../theme/apptheme";

export default AddRawMaterial = ({ route, navigation }) => {
  const services = ["Processing", "Formulating", "Sterilization", "Packaging", "Labelling", "Handling", "Quality control"];
  const categories = ["JSW", "ESSAR", "TATA Steel", "SAIL"];
  const [visible, setVisible] = React.useState(false);

  const [serviceError, setServiceError] = React.useState(false);
  const [categoryError, setCategoryError] = React.useState(false);
  const [brandCodeError, setBrandCodeError] = React.useState(false);
  const [service, setService] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [brandCode, setBrandCode] = React.useState("");

  const onServiceSelected = (selectedItem) => {
    setService(selectedItem);
    setServiceError(false);
  };
  const onCategorySelected = (selectedItem) => {
    setCategory(selectedItem);
    setCategoryError(false);
  };
  const onBrandCodeChanged = (text) => {
    if (text.length === 0) {
      setBrandCodeError(true);
    } else {
      setBrandCode(text);
      setBrandCodeError(false);
    }
  };
  const ValidateRawMaterials = () => {
    let isValid = true;
    if (service.length === 0) {
      setServiceError(true);
      isValid = false;
    }
    if (category.length === 0) {
      setCategoryError(true);
      isValid = false;
    }
    if (brandCode.length === 0) {
      setBrandCodeError(true);
      isValid = false;
    }
    if (isValid) {
      const arrRawMaterials = [...route.params.currentList];
      arrRawMaterials.push({ key: arrRawMaterials.length + 1, text: category, code: brandCode });
      route.params.clickHandler(arrRawMaterials, category);
      navigation.goBack();
    } else {
      setVisible(true);
    }
  };
  return (
    <View style={[Styles.flex1]}>
      <ScrollView style={[Styles.flex1, Styles.padding16, Styles.backgroundColor]} keyboardShouldPersistTaps="handled">
        <View style={[Styles.marginBottom16]}>
          <Dropdown label="Service Type" data={services} onSelected={onServiceSelected} isError={serviceError} />
        </View>
        <View style={[Styles.marginBottom16]}>
          <Dropdown label="Category (Raw Material Brand)" data={categories} onSelected={onCategorySelected} isError={categoryError} />
        </View>
        <TextInput label="Brand code" onChangeText={onBrandCodeChanged} style={{ backgroundColor: "transparent" }} error={brandCodeError} />
        <Button style={{ marginTop: 32 }} mode="contained" onPress={ValidateRawMaterials}>
          SAVE
        </Button>
      </ScrollView>
      <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={3000} style={{ backgroundColor: theme.colors.error }}>
        Please check the details you have filled
      </Snackbar>
    </View>
  );
};
