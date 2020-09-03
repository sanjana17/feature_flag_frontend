const baseUrl = "http://localhost:8080";
export default class Api {
  static fetch = (url, method, options) =>
    fetch(baseUrl + url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(options),
    })
      .then((response) =>
        response.json().then((data) => ({ data, statusCode: response.status }))
      )
      .catch((error) => ({ error }));

  static get = (url) => {
    return Api.fetch(url);
  };

  static post = (url, method, options) => {
    return Api.fetch(url, method, options);
  };
}
