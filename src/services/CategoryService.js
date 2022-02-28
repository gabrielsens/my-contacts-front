import HttpClient from './utils/HttpClient';

class CategoryService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }
}

// singleton
export default new CategoryService();
