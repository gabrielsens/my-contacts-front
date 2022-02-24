export default class APIError extends Error {
  constructor(response, body) {
    super();
    this.name = 'APIError';
    this.message = `${response.status}: ${response.statusText} - ${body?.error || ''}`;
  }
}
