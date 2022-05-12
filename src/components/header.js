import { ContainerHorizontal } from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { theme } from "../theme/apptheme";
import { TouchableNativeFeedback, View } from "react-native";

const Header = ({ navigation }) => {
  return (
    <ContainerHorizontal style={{ height: 64, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", backgroundColor: theme.colors.primary }}>
      <TouchableNativeFeedback>
        <View
          style={{ width: 48, height: 48, alignItems: "center", justifyContent: "center" }}
          onTouchStart={() => {
            navigation.toggleDrawer();
          }}
        >
          <FontAwesomeIcon icon={faBarsStaggered} size={24} color={theme.colors.textLight} />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View
          style={{ width: 48, height: 48, alignItems: "center", justifyContent: "center" }}
          onTouchStart={() => {
            //navigation.toggleDrawer();
          }}
        >
          <FontAwesomeIcon icon={faBell} size={24} color={theme.colors.textLight} />
        </View>
      </TouchableNativeFeedback>
    </ContainerHorizontal>
  );
};

export default Header;
