import { ScrollView, View } from "react-native";
import { Snackbar } from "react-native-paper";
import Dropdown from "../../../components/dropdown";
import { Styles } from "../../../styles/styles";

export default AddGPCoilWidth = ({ route, navigation }) => {
  return (
    <View style={[Styles.flex1]}>
      <ScrollView style={[Styles.flex1, Styles.padding16, Styles.backgroundColor]} keyboardShouldPersistTaps="handled"></ScrollView>
    </View>
  );
};
