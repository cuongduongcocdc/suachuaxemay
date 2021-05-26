import http from "../http-common";

const API_URL = "http://localhost:8099/api/auth";
class UserDataService {
  checkLogin(username: string, password: string) {
    return http.post(API_URL + "/signin", { username, password });
  }
}

export default new UserDataService();
