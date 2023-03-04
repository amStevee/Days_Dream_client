import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Single from "./Pages/Single";
import Login from "./Pages/Login";
import GlobalStyle from "./styles/Globalstyle.styled";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./Pages/Register";
import Write from "./Pages/Write";
// import axios from "axios";
// axios.defaults.withCredentials = true;

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts/:id" element={<Single />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/write?edit" element={<Write />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
