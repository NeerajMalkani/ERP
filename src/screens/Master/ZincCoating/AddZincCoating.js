import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { Styles } from "../../../styles/styles";
import { theme } from "../../../theme/apptheme";

export default AddZincCoating = ({ route, navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const [gsmError, setGSMError] = React.useState(false);
  const [descriptionError, setDescriptionError] = React.useState(false);
  const [gsm, setGSM] = React.useState("");
  const [description, setDescription] = React.useState("");

  const onGSMChanged = (text) => {
    if (text.length === 0) {
      setGSMError(true);
    } else {
      setGSM(text);
      setGSMError(false);
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

  const ValidateZincCoating = () => {
    let isValid = true;
    if (gsm.length === 0) {
      setGSMError(true);
      isValid = false;
    }
    if (description.length === 0) {
      setDescriptionError(true);
      isValid = false;
    }
    if (isValid) {
      const arrGSM = [...route.params.currentList];
      arrGSM.push({ key: arrGSM.length + 1, text: gsm + " GSM" });
      route.params.clickHandler(arrGSM, gsm + " GSM");
      navigation.goBack();
    } else {
      setVisible(true);
    }
  };

  return (
    <View style={[Styles.flex1]}>
      <ScrollView style={[Styles.flex1, Styles.padding16, Styles.backgroundColor]} keyboardShouldPersistTaps="handled">
        <TextInput label="GSM" onChangeText={onGSMChanged} keyboardType="numeric" style={{ backgroundColor: "transparent" }} error={gsmError} />
        <TextInput label="Description" onChangeText={onDescriptionChanged} style={{ backgroundColor: "transparent" }} error={descriptionError} />
        <Button style={{ marginTop: 32 }} mode="contained" onPress={ValidateZincCoating}>
          SAVE
        </Button>
      </ScrollView>
      <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={3000} style={{ backgroundColor: theme.colors.error }}>
        Please check the details you have filled
      </Snackbar>
    </View>
  );
};
