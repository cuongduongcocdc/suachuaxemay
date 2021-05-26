import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8099/";

class UserService {
  getAllByPaging(params) {
    return axios.get(
      API_URL + "category",
      { params },
      { headers: authHeader() }
    );
  }
}

export default new UserService();
