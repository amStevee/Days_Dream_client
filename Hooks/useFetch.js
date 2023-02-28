import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Login = async (inputs) => {
  return axios(
    `https://day-dream-server.onrender.com/api/v1/auth/login`,
    inputs
  );
};

export const useLogin = (inputs) => {
  return useQuery(["login"], () => Login(inputs));
};
