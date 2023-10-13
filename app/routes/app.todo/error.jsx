import React from "react";
import { Page, Layout, EmptyState, Card } from "@shopify/polaris";

const Error = () => {
  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Page Not Found"
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          imageContained
        >
          <p>We're sorry, the page you requested could not be found.</p>
        </EmptyState>
        <Layout.AnnotatedSection
          title="Error Details"
          description="The following error occurred while processing your request:"
        >
          <Card>
            <p>404 Not Found</p>
            <p>The requested URL was not found on this server.</p>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default Error;
