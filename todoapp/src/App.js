import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { text: newTodo, completed: false, id: Date.now() },
      ]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "40px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          Todo List
        </Typography>

        <TextField
          fullWidth
          label="Enter a new todo"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <Button variant="contained" color="primary" onClick={addTodo} fullWidth>
          Add Todo
        </Button>

        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: todo.completed ? "#e0f7fa" : "white",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                  color="primary"
                />
                <ListItemText
                  primary={todo.text}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#b0bec5" : "black",
                  }}
                />
              </div>

              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTodo(todo.id)}
                color="secondary"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;
