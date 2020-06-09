/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Partha Ghosh
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make an HTTP GET Request 
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await res.json();
    return resData;
  }

  // Make an HTTP PUT Request
  async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await res.json();
    return resData;
  }

  // Make an HTTP DELETE Request
  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const resData = await 'User Deleted..';
    return resData;
  }
}

 