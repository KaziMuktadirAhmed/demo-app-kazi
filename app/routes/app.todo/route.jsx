import { useState } from "react";
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
  Box,
} from "@shopify/polaris";
import { useNavigate } from "@remix-run/react";
import TodoDetail from "../app.todo.$title/route";
import { authenticate } from "~/shopify.server";
import { json, redirect } from "@remix-run/node";

import db from "../../db.server";

export async function action({ request, params }) {
  const { session } = await authenticate.admin(request);
  const { shop } = session;

  /** @type {any} */
  const data = {
    ...Object.fromEntries(await request.formData()),
    shop,
  };

  if (data.action === "delete") {
    await db.qRCode.delete({ where: { id: Number(params.id) } });
    return redirect("/app");
  }

  // const errors = validateQRCode(data);
  const errors = "";

  if (errors) {
    return json({ errors }, { status: 422 });
  }

  const qrCode =
    params.id === "new"
      ? await db.qRCode.create({ data })
      : await db.qRCode.update({ where: { id: Number(params.id) }, data });

  return redirect(`/app/qrcodes/${qrCode.id}`);
}

function Todo() {
  const [todoList, setToDoList] = useState([
    { text: "Initial todo", completed: false },
  ]);
  const [todo, setToDo] = useState({ text: "", completed: false });
  const navigate = useNavigate();

  // function to save the todo in sqlite databae
  function saveTodo() {
    fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoList),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

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
          <HorizontalStack gap="10">
            <Box
              as="div"
              width="45%"
              padding="10"
              background="bg-fill-caution-secondary"
            >
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
            </Box>
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
