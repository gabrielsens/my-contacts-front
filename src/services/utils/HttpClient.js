import delay from '../../utils/delay';

import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);
    await delay(500);
    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }
    if (response.ok) {
      return body;
    }
    throw new APIError(response, body);
  }
}

export default HttpClient;
