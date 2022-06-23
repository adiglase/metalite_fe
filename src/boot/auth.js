import { boot } from "quasar/wrappers";
import useAuth from "stores/auth.js";
import axios from "axios";

export default boot(({}) => {
  if (!useAuth().isAuthenticated()) {
    const savedToken = localStorage.getItem("token");
    console.log("saved", savedToken);
    if (savedToken) {
      useAuth().setToken(savedToken);
      axios.defaults.headers.common["Authorization"] = "Token " + savedToken;
    }
  }
  console.log(axios.defaults.headers);
});
