import http from "../http-common";
import authHeader from "../services/auth-header";

class TaskService {
  
    getAllTaskName() {
      return http.get("/task/getaLl", { headers: authHeader() });
    }
    
  }
  
  export default new TaskService();
  