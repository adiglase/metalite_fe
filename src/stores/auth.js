import axios from "axios";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { Notify } from "quasar";

const user = ref({});
const isLoading = ref(false);
const errors = ref([]);
const token = ref("");

export default function useAuth() {
  const router = useRouter();

  function setToken(newToken) {
    token.value = newToken;
  }

  function isAuthenticated() {
    return token.value !== "";
  }

  async function signUp(formData) {
    errors.value = [];
    isLoading.value = true;

    try {
      await axios.post("/api/v1/users/", formData);
      Notify.create({
        type: "positive",
        message: "Berhasil signup",
      });
      router.push("login");
    } catch (error) {
      if (error.response) {
        for (const property in error.response.data) {
          errors.value.push(`${property}: ${error.response.data[property]}`);
        }
      } else if (error.message) {
        errors.value.push(error.message);
      }
    }

    isLoading.value = false;
  }

  async function login(formData) {
    errors.value = [];
    isLoading.value = true;

    try {
      const response = await axios.post("/api/v1/token/login/", formData);
      console.log("response:", response);
      const token = response.data.auth_token;

      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Token " + token;
      localStorage.setItem("token", token);
      isLoading.value = false;

      Notify.create({
        type: "positive",
        message: "Berhasil login",
      });

      router.push("/");
    } catch (error) {
      if (error.response) {
        for (const property in error.response.data) {
          errors.value.push(`${property}: ${error.response.data[property]}`);
        }
      } else if (error.message) {
        console.error(error.message);
        errors.value.push(error.message);
      }
    }

    isLoading.value = false;
  }

  async function logout() {
    errors.value = [];
    isLoading.value = true;

    try {
      // const response = await axios.post("/api/v1/token/logout");
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.setItem("token", "");
      isLoading.value = false;

      Notify.create({
        type: "positive",
        message: "Berhasil logout",
      });
      router.push("login");
    } catch (error) {
      console.log(error.message);
    }

    isLoading.value = false;
  }

  return {
    isLoading: computed(() => isLoading.value),
    user: computed(() => user.value),
    errors: computed(() => errors.value),
    isAuthenticated,
    setToken,
    signUp,
    login,
    logout,
  };
}
