import React, { useState } from "react";
import { Button, TextField, Container, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
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
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={addTodo} 
          fullWidth
        >
          Add Todo
        </Button>

        <List>
          {todos.map((todo, index) => (
            <ListItem key={index}>
              <ListItemText primary={todo} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;
