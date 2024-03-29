import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { Styles } from "../../../styles/styles";
import { theme } from "../../../theme/apptheme";

export default AddGPCoilWidth = ({ route, navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const [widthOfGPCoilError, setWidthOfGPCoilError] = React.useState(false);
  const [descriptionError, setDescriptionError] = React.useState(false);
  const [widthOfGPCoil, setWidthOfGPCoil] = React.useState("");
  const [description, setDescription] = React.useState("");

  const onWidthOfGPCoilChanged = (text) => {
    if (text.length === 0) {
      setWidthOfGPCoilError(true);
    } else {
      setWidthOfGPCoil(text);
      setWidthOfGPCoilError(false);
    }
  };

  const onDescriptionChanged = (text) => {
    if (text.length === 0) {
      setDescriptionError(true);
    } else {
      setDescription(text);
      setDescriptionError(false);
    }
  };

  const ValidateGPCoil = () => {
    let isValid = true;
    if (widthOfGPCoil.length === 0) {
      setWidthOfGPCoilError(true);
      isValid = false;
    }
    if (description.length === 0) {
      setDescriptionError(true);
      isValid = false;
    }
    if (isValid) {
      const arrGPCoil = [...route.params.currentList];
      arrGPCoil.push({ key: arrGPCoil.length + 1, text: widthOfGPCoil + "mm" });
      route.params.clickHandler(arrGPCoil, widthOfGPCoil + "mm");
      navigation.goBack();
    } else {
      setVisible(true);
    }
  };

  return (
    <View style={[Styles.flex1]}>
      <ScrollView style={[Styles.flex1, Styles.padding16, Styles.backgroundColor]} keyboardShouldPersistTaps="handled">
        <TextInput label="Width of GP Coil" onChangeText={onWidthOfGPCoilChanged} keyboardType="numeric" style={{ backgroundColor: "transparent" }} error={widthOfGPCoilError} />
        <TextInput label="Description" onChangeText={onDescriptionChanged} style={{ backgroundColor: "transparent" }} error={descriptionError} />
        <Button style={{ marginTop: 32 }} mode="contained" onPress={ValidateGPCoil}>
          SAVE
        </Button>
      </ScrollView>
      <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={3000} style={{ backgroundColor: theme.colors.error }}>
        Please check the details you have filled
      </Snackbar>
    </View>
  );
};
