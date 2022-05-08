import { Card, Headline, Paragraph, Subheading, Text, Title } from "react-native-paper";
import { Box } from "../components/box";
import { theme } from "../theme/apptheme";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons/faCartFlatbed";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";
import { faShop } from "@fortawesome/free-solid-svg-icons/faShop";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { View } from "react-native";
import { LineChart } from "react-native-svg-charts";
import { Grid } from "react-native-svg-charts";

export default DashboardScreen = ({ navigation }) => {
  const data = [25000, 35123, 156987, 194565, 146598, 245654];
  const CreateCard = (title, description, color, icon, subdescription) => {
    return (
      <View style={{ width: "50%", height: 160, padding: 8, position: "relative" }}>
        <Card style={{ height: "100%", backgroundColor: color, borderRadius: 16, overflow: "hidden" }}>
          <Card.Content>
            <Text style={{ color: theme.colors.textLight, fontSize: 36, fontWeight: "bold" }}>{title}</Text>
            <Subheading style={{ color: theme.colors.textLight }}>{description}</Subheading>
            <Paragraph style={{ color: theme.colors.textLight, fontSize: 12, marginTop: -4 }}>{subdescription}</Paragraph>
          </Card.Content>
          <View style={{ position: "absolute", bottom: -8, right: -8, opacity: 0.6, zIndex: -1, transform: [{ rotate: "-12deg" }] }}>
            <FontAwesomeIcon icon={icon} size={72} color={theme.colors.textLightSecondary} />
          </View>
        </Card>
      </View>
    );
  };
  return (
    // , "(Raw \n Materials Brand)"
    <Box style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 8 }}>
        {CreateCard("20", "Manufacturers", theme.multicolors.yellow, faCartFlatbed)}
        {CreateCard("118", "Suppliers", theme.multicolors.red, faTruck)}
        {CreateCard("95", "Vendors", theme.multicolors.blue, faShop)}
        {CreateCard("845", "Customers", theme.multicolors.green, faUsers)}
      </View>
      <View style={{ flex: 1, flexDirection: "column", padding: 16, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: theme.colors.textLight }}>
        <Title style={{ marginStart: 4 }}>Production</Title>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Card style={{ flex: 1, borderRadius: 16, margin: 4 }}>
            <Card.Content>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 12 }}>Raw Materials</Text>
                <Text style={{ fontSize: 16, marginTop: 12 }}>8273 kgs</Text>
                <Text style={{ fontSize: 16, marginTop: 8 }}>36 units</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={{ flex: 1, borderRadius: 16, margin: 4 }}>
            <Card.Content>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 14 }}>Production</Text>
                <Text style={{ fontSize: 16, marginTop: 12 }}>23467 kgs</Text>
                <Text style={{ fontSize: 16, marginTop: 8 }}>45 units</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={{ flex: 1, borderRadius: 16, margin: 4 }}>
            <Card.Content>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 14 }}>Scrap</Text>
                <Text style={{ fontSize: 16, marginTop: 24 }}>2850 kgs</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
        <Title style={{ marginTop: 16, marginStart: 4 }}>Sales</Title>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Card style={{ flex: 1, borderRadius: 16, margin: 4 }}>
            <Card.Content>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 14 }}>Total Sales</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>₹2,45,654</Text>
              </View>
              <LineChart style={{ height: 40 }} showGrid={false} numberOfTicks={0} data={data} svg={{ stroke: "rgb(134, 65, 244)" }} contentInset={{ top: 8, bottom: 4 }}>
                <Grid />
              </LineChart>
            </Card.Content>
          </Card>
          <Card style={{ flex: 1, borderRadius: 16, margin: 4 }}>
            <Card.Content>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 14 }}>This Month</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 16 }}>₹45,212</Text>
                <Text style={{ fontSize: 14, color: theme.multicolors.green, marginTop: 4 }}>₹263▲</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={{ flex: 1, borderRadius: 16, margin: 4 }}>
            <Card.Content>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 14 }}>Today</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 16 }}>₹2,458</Text>
                <Text style={{ fontSize: 14, color: theme.multicolors.red, marginTop: 4 }}>₹25▼</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>
    </Box>
  );
};
