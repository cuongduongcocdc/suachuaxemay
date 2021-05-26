import http from "../http-common";
import authHeader from "../services/auth-header";


class BillService {
  
    addBill(params:any) {
      return http.get("/bill/addbill", {  params, headers: authHeader() });
    }
    
  }
  
  export default new BillService();
