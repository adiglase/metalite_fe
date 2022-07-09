import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurrentUser = defineStore("currentUser", () => {
  const userData = ref("");

  function setUserData(data) {
    userData.value = data;
  }

  return {
    userData,
    setUserData,
  };
});
