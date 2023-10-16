import { Card, Text, VerticalStack, Box } from "@shopify/polaris";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const { title } = useParams();

  return (
    <Box
      as="div"
      width="50%"
      background="bg-fill-caution-secondary"
      padding="10"
    >
      <VerticalStack gap="1">
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
    </Box>
  );
};

export default TodoDetail;
