import React, { useState } from "react";
import {
  Page,
  Layout,
  Card,
  Text,
  FormLayout,
  TextField,
  Button,
  Checkbox,
} from "@shopify/polaris";

function Todo() {
  const [todoList, setToDoList] = useState([
    { text: "Initial todo", completed: false },
  ]);
  const [todo, setToDo] = useState({ text: "", completed: false });

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <Text as="h1">Progress tracker</Text>
          </Card>
        </Layout.Section>
        <Layout.Section>
          {todoList.map((todo, index) => (
            <Card key={index}>
              {/* <Checkbox label={todo.text} checked={todo.completed}></Checkbox> */}
              <Checkbox label={todo.text} checked={todo.completed}></Checkbox>
            </Card>
          ))}
        </Layout.Section>
        <Layout.Section>
          <Card>
            <FormLayout>
              <TextField
                label="To Do"
                value={todo.text}
                onChange={(newValue) =>
                  setToDo({ text: newValue, completed: false })
                }
                autoComplete="off"
              />
              <Button
                primary
                onClick={() => {
                  setToDoList([...todoList, todo]);
                  setToDo({ text: "", completed: false });
                }}
              >
                Add To Do
              </Button>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Todo;
// make a todo component that I can call from this component
