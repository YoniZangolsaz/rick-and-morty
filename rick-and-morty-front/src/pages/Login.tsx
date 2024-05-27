import { useState } from "react";
import LoginForm, { User } from "../components/LoginForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/api";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SnackBar from "../components/SnackBar";

export type messageType = {
  open: boolean;
  type: any;
  message: string;
};

const Login = () => {
  const [openMessage, setOpenMessage] = useState<messageType>({
    open: false,
    type: "",
    message: "",
  });
  const navigate = useNavigate();

  const { mutateAsync: userLogin } = useMutation({
    mutationFn: (user: User) => login(user),
  });

  const loginSubmit = async (user: User) => {
    try {
      const loginUser = await userLogin(user);
      localStorage.setItem("token", loginUser.token);
      localStorage.setItem("user", JSON.stringify(loginUser.user));
      navigate("/home");
    } catch (e) {
      setOpenMessage({
        open: true,
        type: "error",
        message: "username or Password Incorrect",
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ height: "100%" }}>
      <LoginForm onSubmitData={loginSubmit} />
      <SnackBar
        msg={openMessage.message}
        type={openMessage.type}
        open={openMessage.open}
        onClose={() => setOpenMessage({ open: false, type: "", message: "" })}
      />
    </Container>
  );
};

export default Login;
