import { Page, Card, Box } from "@shopify/polaris";

export default function Hello() {
  console.log("new page");
  return (
    <Page>
      <Card>
        <div>
          <h1>Hello</h1>
          <h2>Shopify</h2>
          <p>This is a demo </p>
          <p>
            <Box
              as="span"
              padding="025"
              paddingInlineStart="1"
              paddingInlineEnd="1"
              background="bg-subdued"
              borderWidth="1"
              borderColor="border"
              borderRadius="1"
            >
              <code>app.jsx</code>
            </Box>
          </p>
        </div>
      </Card>
    </Page>
  );
}
