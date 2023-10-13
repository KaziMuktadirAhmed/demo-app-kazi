import { Page, Layout, Card, Text, VerticalStack } from "@shopify/polaris";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const { title } = useParams();

  return (
    <VerticalStack>
      <Card>
        <Text as="h1">{title}</Text>
      </Card>
      <Card>
        <Text as="p">
          <p>Description goes here</p>
        </Text>
      </Card>
      <Card>
        <Text as="p">
          <p>Additional goals go here</p>
        </Text>
      </Card>
    </VerticalStack>
  );
};

export default TodoDetail;
