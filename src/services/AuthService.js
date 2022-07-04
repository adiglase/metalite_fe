import axios from "axios";
import { useErrors } from "../stores/errors";
import { Notify } from "quasar";
import router from "src/router/index.js";
import { useAuth } from "src/stores/auth.js";

const errors = useErrors();
const auth = useAuth();

export default function AuthService() {
  async function signUp(signUpData) {
    const errorList = [];

    try {
      await axios.post("/api/v1/users/", signUpData);

      Notify.create({
        type: "positive",
        message: "Berhasil signup",
      });

      router.push({ name: "login" });
    } catch (error) {
      if (error.response) {
        for (const property in error.response.data) {
          errorList.push(`${property}: ${error.response.data[property]}`);
        }
      } else if (error.message) {
        errorList.push(error.message);
      }
    }

    errors.setErrors(errorList);
  }

  async function login(loginData) {
    const errorList = [];

    auth.setToken("");

    try {
      const response = await axios.post("/api/v1/token/login/", loginData);
      const token = response.data.auth_token;

      auth.setToken(token);

      Notify.create({
        type: "positive",
        message: "Berhasil login",
      });

      router.push("/");
    } catch (error) {
      if (error.response) {
        for (const property in error.response.data) {
          errorList.push(`${property}: ${error.response.data[property]}`);
        }
      } else if (error.message) {
        console.error(error.message);
        errorList.push(error.message);
      }
    }

    errors.setErrors(errorList);
  }

  async function logout() {
    auth.setToken("");

    Notify.create({
      type: "positive",
      message: "Berhasil logout",
    });

    router.push({ name: "login" });
  }

  return {
    signUp,
    login,
    logout,
  };
}
