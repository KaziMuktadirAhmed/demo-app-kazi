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
  HorizontalStack,
} from "@shopify/polaris";
import { useNavigate } from "@remix-run/react";
import TodoDetail from "../app.todo.$title/route";

function Todo() {
  const [todoList, setToDoList] = useState([
    { text: "Initial todo", completed: false },
  ]);
  const [todo, setToDo] = useState({ text: "", completed: false });
  const navigate = useNavigate();

  return (
    <Page>
      <ui-title-bar title="Progress tracker">
        <button variant="breadcrumb" onClick={() => navigate("/app")}>
          Home
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card>
            <Text as="h1">Tasks at hand</Text>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <HorizontalStack>
            <Card background="bg-fill-caution-secondary">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {todoList.map((todo, index) => (
                  <Card key={index}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Checkbox
                        label={todo.text}
                        checked={todo.completed}
                        onChange={() => {
                          const newTodoList = [...todoList];
                          newTodoList[index].completed =
                            !newTodoList[index].completed;
                          setToDoList(newTodoList);
                        }}
                      />
                      <Button
                        onClick={() => navigate(`/app/todo/${todo.text}`)}
                      >
                        See details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
            <TodoDetail />
          </HorizontalStack>
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
