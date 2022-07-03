import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Global state of errors
 */
export const useErrors = defineStore("errors", () => {
  const errors = ref([]);

  function resetErrors() {
    errors.value.splice(0);
  }

  function setErrors(errorItems) {
    this.resetErrors();
    errors.value.push(...errorItems);
  }

  return {
    errors,
    setErrors,
    resetErrors,
  };
});
