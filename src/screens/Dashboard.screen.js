import { Card, Paragraph, Title } from "react-native-paper";
import { Container, ContainerHorizontal, ContainerVertical } from "../components/container";
import { Box } from "../components/box";

export default DashboardScreen = () => {
  return (
    <Box style={{ padding: 16 }}>
      <ContainerHorizontal>
        <Card style={{ display: "flex", flex: 1, marginEnd: 8, height: 160 }}>
          <Card.Content>
            <ContainerVertical>
              <Title>20</Title>
              <Paragraph>Manufacturers</Paragraph>
            </ContainerVertical>
          </Card.Content>
        </Card>
        <Card style={{ display: "flex", flex: 1, marginStart: 8, height: 160 }}>
          <Card.Content>
            <ContainerVertical>
              <Title>20</Title>
              <Paragraph>Manufacturers</Paragraph>
            </ContainerVertical>
          </Card.Content>
        </Card>
      </ContainerHorizontal>
      <ContainerHorizontal style={{ marginTop: 16 }}>
        <Card style={{ display: "flex", flex: 1, marginEnd: 8, height: 160 }}>
          <Card.Content>
            <ContainerVertical>
              <Title>20</Title>
              <Paragraph>Manufacturers</Paragraph>
            </ContainerVertical>
          </Card.Content>
        </Card>
        <Card style={{ display: "flex", flex: 1, marginStart: 8, height: 160 }}>
          <Card.Content>
            <ContainerVertical>
              <Title>20</Title>
              <Paragraph>Manufacturers</Paragraph>
            </ContainerVertical>
          </Card.Content>
        </Card>
      </ContainerHorizontal>
    </Box>
  );
};
