import { Page, Card } from "@shopify/polaris";

export default function Hello() {
  console.log("new page");
  return (
    <Page>
      <Card>
        <h1>Hello</h1>
      </Card>
    </Page>
  );
}
