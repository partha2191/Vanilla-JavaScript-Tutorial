const http = new EasyHTTP;

// Get Users
// http.get('https://api.github.com/users')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// User Data
const data = {
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(res => console.log(res))
  .catch(err => console.log(err))