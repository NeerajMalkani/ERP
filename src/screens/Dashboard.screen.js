import { Card, Paragraph, Subheading, Text, Title } from "react-native-paper";
import { theme } from "../theme/apptheme";
import Header from "../components/header";
import { View } from "react-native";
import { LineChart } from "react-native-svg-charts";
import { Grid } from "react-native-svg-charts";
import { Styles } from "../styles/styles";
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export default DashboardScreen = ({ navigation }) => {
  const CreateMainCard = (title, description, color, subdescription) => {
    return (
      <View style={[Styles.padding4, { width: "50%" }]}>
        <Card style={[Styles.borderRadius4, Styles.border1, Styles.flexJustifyCenter, Styles.flexAlignCenter, { backgroundColor: color }]}>
          <Card.Content>
            <Text style={[Styles.textColor, Styles.fontSize24, Styles.textCenter]}>{title}</Text>
            <Subheading style={[Styles.textSecondaryColor]}>{description}</Subheading>
            <Paragraph style={[Styles.textSecondaryColor, Styles.fontSize12, { marginTop: -4 }]}>{subdescription}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };
  const CreateProductionCard = (title, value1, value2) => {
    return (
      <Card style={[Styles.borderRadius4, Styles.flex1, Styles.border1, Styles.padding0, Styles.margin4]}>
        <View style={[Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
          <Text style={[Styles.fontSize14, Styles.textSecondaryColor, Styles.marginTop12]}>{title}</Text>
          <Text style={[Styles.fontSize16, Styles.textColor, Styles.marginTop12]}>{value1}</Text>
          <Text style={[Styles.fontSize16, Styles.textColor, Styles.marginTop8, Styles.marginBottom12]}>{value2}</Text>
        </View>
      </Card>
    );
  };
  const CreateSalesCard = (title, value, graphData, value2, isGrowth) => {
    return (
      <Card style={[Styles.flex1, Styles.borderRadius4, Styles.margin4, Styles.border1]}>
        <Card.Content>
          <View style={[Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
            <Text style={[Styles.fontSize14, Styles.textSecondaryColor]}>{title}</Text>
            <Text style={[Styles.fontSize16, Styles.textColor, Styles.marginTop8]}>{value}</Text>
            {value2 !== undefined && <Text style={[Styles.fontSize14, Styles.marginTop4, { color: isGrowth ? theme.multicolors.green : theme.multicolors.red }]}>{value2}</Text>}
          </View>
          {graphData !== undefined && (
            <LineChart style={{ height: 40 }} showGrid={false} numberOfTicks={0} data={graphData} svg={{ stroke: "rgb(134, 65, 244)" }} contentInset={{ top: 8, bottom: 4 }}>
              <Grid />
            </LineChart>
          )}
        </Card.Content>
      </Card>
    );
  };
  return (
    <View style={[Styles.flex1]}>
      <Header navigation={navigation} title="Dashboard" />
      <View style={[Styles.flexRow, Styles.flexWrap, Styles.padding8]}>
        {CreateMainCard("20", "Manufacturers", theme.colors.textLight)}
        {CreateMainCard("118", "Suppliers", theme.colors.textLight)}
        {CreateMainCard("95", "Vendors", theme.colors.textLight)}
        {CreateMainCard("845", "Customers", theme.colors.textLight)}
      </View>
      <View style={[Styles.flexColumn, Styles.flexGrow, Styles.padding16, Styles.borderTopRadius16, Styles.backgroundColor]}>
        <Title style={[Styles.margin4]}>Production</Title>
        <View style={[Styles.flexRow]}>
          {CreateProductionCard("Raw Material", "8273 kgs", "36 units")}
          {CreateProductionCard("Production", "23467 kgs", "45 units")}
          {CreateProductionCard("Scrap", "2850 kgs")}
        </View>
        <Title style={[Styles.marginTop16, Styles.marginStart4]}>Sales</Title>
        <View style={[Styles.flexRow]}>
          {CreateSalesCard("Total Sales", "₹2,45,654", [25000, 35123, 156987, 194565, 146598, 245654])}
          {CreateSalesCard("This Month", "₹45,212", undefined, "₹263▲", true)}
          {CreateSalesCard("Today", "₹2,458", undefined, "₹25▼", false)}
        </View>
      </View>
    </View>
  );
};
