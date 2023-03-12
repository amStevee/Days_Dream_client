import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Single from "./Pages/Single";
import Login from "./Pages/Login";
import UserAccount from "./Pages/UserAccount";
import GlobalStyle from "./styles/Globalstyle.styled";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./Pages/Register";
import Write from "./Pages/Write";
import AboutUs from "./Pages/AboutUs";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <main className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts/:id" element={<Single />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/write" element={<Write />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
