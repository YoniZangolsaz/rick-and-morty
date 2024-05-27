import {
  Avatar,
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styles } from "./style/loginFormStyle";

export type User = {
  name: string;
  password: string;
};

type Error = {
  name: boolean;
  password: boolean;
};

type props = {
  onSubmitData: (user: User) => void;
};

const LoginForm = ({ onSubmitData }: props) => {
  const [username, setUsername] = useState<User>({
    name: "",
    password: "",
  });
  const [error, setError] = useState<Error>({
    name: false,
    password: false,
  });

  const handleUserChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    e.preventDefault();
    setUsername({ ...username, [key]: e.target.value.trim() });
    setError({ ...error, [key]: false });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ name: false, password: false });
    error.name = !username.name;
    error.password = !username.password;

    if (error.name || error.password) {
      setError({ ...error });
    } else {
      onSubmitData(username);
    }
  };
  return (
    <Box sx={styles.mainBox}>
      <Card sx={styles.card}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4">Sign in</Typography>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          noValidate
          sx={styles.formBox}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            onChange={(e) => handleUserChange(e, "name")}
            error={error.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            onChange={(e) => handleUserChange(e, "password")}
            error={error.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={styles.submitButton}
          >
            Sign In
          </Button>
        </Box>
        {(error.name || error.password) && (
          <Typography variant="h6" sx={styles.errorText}>
            Please fill all the fields
          </Typography>
        )}
      </Card>
    </Box>
  );
};

export default LoginForm;
