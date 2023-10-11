import React, { useState } from "react";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Button,
  Checkbox,
} from "@shopify/polaris";

function Todo() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <h1>Hello todo</h1>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Todo;
// make a todo component that I can call from this component
