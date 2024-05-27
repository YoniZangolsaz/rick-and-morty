import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
