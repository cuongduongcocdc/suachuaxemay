import http from "../http-common";
import authHeader from "../services/auth-header";

class CategoryDataService {
  
  getAllByPaging(params: any) {
    return http.get("/category", { params, headers: authHeader() });
  }

  createCategory(params: any) {
    return http.post("/categorys", params, { headers: authHeader() });
  }

  getAll() {
    return http.get("/categorys", { headers: authHeader() });
  }

  getOne(id: number) {
    return http.get(`/categorys/${id}`, { headers: authHeader() });
  }

  update(id: number, data: any) {
    return http.put(`/categorys/${id}`, data, { headers: authHeader() });
  }

  delete(id: number) {
    return http.delete(`/categorys/${id}`, { headers: authHeader() });
  }

}

export default new CategoryDataService();
