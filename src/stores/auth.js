import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const token = ref("");

  function setToken(newToken) {
    token.value = newToken;
    localStorage.setItem("token", token.value);
  }

  return {
    token,
    setToken,
  };
});
