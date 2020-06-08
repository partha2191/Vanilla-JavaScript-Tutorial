// Calling a constructor
const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// Add Post
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// Update Post
http.post('https://jsonplaceholder.typicode.com/posts/2', data, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/3', function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
